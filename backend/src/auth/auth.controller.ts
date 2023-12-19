import { Body, Controller, Post, HttpCode, HttpStatus, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import { RefreshJwtGuard } from "../guards/refresh.guard";

@Controller("v0/auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post("/signup")
    async signUp(@Body() signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("/signin")
    async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto);
    }

    @UseGuards(RefreshJwtGuard)
    @Post("/refresh")
    async refreshToken(@Request() req) {
        return await this.authService.refreshToken(req.usertoken);
    }
}
