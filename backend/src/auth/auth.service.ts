import { Injectable, BadRequestException, UnauthorizedException, ConflictException } from "@nestjs/common";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import * as bcrypt from "bcrypt";
import { UserService } from "../features/user/user.service";
import { JwtService } from "@nestjs/jwt";
import { JWTPayload } from "./interface.auth";
import { UserDocument } from "../features/user/users.schema";
import { ResponseUserDto } from "../features/user/dto/response-user.dto";
import { plainToClass } from "class-transformer";

const EXPIRE_TIME = 60 * 60; // 1 hour

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    getResponseDtoFrom(anUser: UserDocument): ResponseUserDto {
        return plainToClass(ResponseUserDto, anUser.toJSON());
    }

    async validateUser({ email, password, address }: { email?: string; password?: string; address?: string }) {
        if (!((email && password) || address)) {
            throw new BadRequestException("Credentials are empties.");
        }

        console.log("email", email);
        console.log("password", password);
        console.log("address", address);

        let user: UserDocument | null;
        if (address) user = await this.userService.findOneByAddress(address);
        else if (email) {
            user = await this.userService.findOneByEmail(email);
            if (user && password && !(await bcrypt.compare(password, user.password))) throw new UnauthorizedException();
        }
        return user;
    }

    async signUp(signUpDto: SignUpDto) {
        const user = await this.validateUser(signUpDto);
        if (user) throw new ConflictException("Credentials existing.");

        const createdUserDoc = await this.userService.createUser({
            ...signUpDto,
            password:
                !signUpDto.address && signUpDto.email && signUpDto.password
                    ? await bcrypt.hash(signUpDto.password, await bcrypt.genSalt(10))
                    : "",
        });
        console.log("createdUserDoc", createdUserDoc);
        delete createdUserDoc.password;

        const payload: JWTPayload = {
            sub: {
                _id: createdUserDoc._id.toString(),
                name: createdUserDoc.address || createdUserDoc.email,
            },
            username: createdUserDoc.address || createdUserDoc.email,
            role: createdUserDoc.userType,
        };

        return {
            user: { ...this.getResponseDtoFrom(createdUserDoc), _id: createdUserDoc._id.toString() },
            backendTokens: await this.getBackendTokens(payload),
        };
    }

    async signIn(signInDto: SignInDto) {
        const user = await this.validateUser(signInDto);
        if (!user) throw new UnauthorizedException();

        delete user.password;

        const payload: JWTPayload = {
            sub: {
                _id: user._id.toString(),
                name: user.address || user.email,
            },
            username: user.address || user.email,
            role: user.userType,
        };

        return {
            user: { ...user, _id: user._id.toString() },
            backendTokens: await this.getBackendTokens(payload),
        };
    }

    async refreshToken(usertoken: any) {
        const payload = {
            username: usertoken.username,
            role: usertoken.role,
            sub: usertoken.sub,
        };

        // TODO: remove this - do I need sub: {...usertoken.sub} ?
        console.log("payload", payload);

        return await this.getBackendTokens(payload);
    }

    async getBackendTokens(payload: JWTPayload) {
        return {
            accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: process.env.JSON_TOKEN_EXPIRE,
                secret: process.env.JSON_TOKEN_KEY,
            }),
            refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: process.env.JSON_REFRESH_TOKEN_EXPIRE,
                secret: process.env.JSON_REFRESH_TOKEN_KEY,
            }),
            expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
        };
    }
}
