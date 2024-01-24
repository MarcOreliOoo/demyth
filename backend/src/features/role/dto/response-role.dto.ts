import { Type, Transform } from "class-transformer";
import { EClassSubType, EClassType } from "../../../enums";
import { ObjectId } from "mongoose";
import { ImagesDto } from "./images-role.dto";
import { ResponseMythologyDto } from "../../mythology/dto/response-mythology.dto";
import { ResponseGodDto } from "../../god/dto/response-god.dto";
import { StatsRoleDto } from "./stats-role.dto";

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
    @Type(() => StatsRoleDto)
    stats: StatsRoleDto;
    @Transform((value) => value.obj.mythology.toString())
    mythology: ObjectId;
    @Transform((value) => value.obj.god.toString())
    god: ObjectId;
}

export class ResponsePopulatedRoleDto {
    @Transform((value) => value.obj._id.toString())
    _id: ObjectId;
    name: string;
    roleType: EClassType;
    roleSubType: EClassSubType;
    shortDesc: string;
    longDesc: string;
    @Type(() => ImagesDto)
    images: ImagesDto[];
    @Type(() => StatsRoleDto)
    stats: StatsRoleDto;
    @Type(() => ResponseMythologyDto)
    mythology: ResponseMythologyDto;
    @Type(() => ResponseGodDto)
    god: ResponseRoleDto;
}
