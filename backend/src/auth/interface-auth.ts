import { Types } from "mongoose";
import { UserType } from "../features/user/enum";

export interface JWTPayload {
    sub: string;
    email: string;
    role: UserType;
}
