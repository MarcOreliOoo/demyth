import { Types } from "mongoose";
import { EUserType } from "../enums/usertype";

export interface JWTPayload {
    sub: string;
    email: string;
    role: EUserType;
}
