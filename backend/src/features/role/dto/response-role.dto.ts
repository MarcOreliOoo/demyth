import { Type, Transform } from "class-transformer";
import { EClassSubType, EClassType } from "../../../enums";
import { ObjectId } from "mongoose";
import { ImagesDto } from "./images-role.dto";

export class ResponseRoleDto {
    @Transform((value) => value.obj._id.toString())
    _id: ObjectId;
    name: string;
    roleType: EClassType;
    roleSubType: EClassSubType;
    shortDesc: string;
    longDesc: string;
    @Type(() => ImagesDto)
    images: ImagesDto[];
    strength: number;
    dexterity: number;
    intelligence: number;
    constitution: number;
    luck: number;
    armor: number;
    @Transform((value) => value.obj.mythology.toString())
    mythology: ObjectId;
    @Transform((value) => value.obj.god.toString())
    god: ObjectId;
}
