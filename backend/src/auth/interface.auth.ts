import { Types } from "mongoose";
import { EUserType } from "../enums/usertype";

export interface JWTPayload {
    sub: { _id: string; name: string };
    username: string;
    role: EUserType;
}
