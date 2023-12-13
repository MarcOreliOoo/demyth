import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, ParseEnumPipe, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./users.schema";
import { log } from "../../utils/debug.utils";
import { EUserType } from "../../enums/usertype";
import { ParseObjectIdPipe } from "../../pipe/objectid.pipe";
import { AuthGuard } from "../../guards/auth.guard";

@Controller("v0/users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Get(":id")
    async getUserProfile(@Param("id") id: string) {
        return await this.userService.findOneById(id);
    }
}
