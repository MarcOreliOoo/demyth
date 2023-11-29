import { EUserType } from "../../../enums/usertype";
import { Exclude, Transform } from "class-transformer";
import { ObjectId } from "mongoose";

export class ResponseUserDto {
    @Transform((value) => value.obj._id.toString())
    _id: ObjectId;
    email: string;
    @Exclude()
    password: string;
    address: string;
    userType: EUserType;
    createdAt: Date;
    updatedAt: Date;
}
