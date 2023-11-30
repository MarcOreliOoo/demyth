import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class RefreshJwtGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    // TODO: check if we need to go through userTypes like in AuthGuard

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) throw new UnauthorizedException("JWT empty.");

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JSON_REFRESH_TOKEN_KEY,
            });
            request.usertoken = payload;
        } catch (error) {
            console.log(error);
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization?.split(" ") ?? [];
        return type === "Refresh" ? token : undefined;
    }
}
