import { Type, Transform } from "class-transformer";
import { EClassSubType, EClassType } from "../../../enums";
import { ObjectId } from "mongoose";
import { ImagesDto } from "./images-role.dto";
import { StatsDto } from "../../hero/dto/stats-hero.dto";
import { MythologyInfoDto } from "../../hero/dto/mythologyInfo-hero.dto";
import { ResponseMythologyDto } from "../../mythology/dto/response-mythology.dto";
import { ResponseGodDto } from "../../god/dto/response-god.dto";

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
    @Type(() => StatsDto)
    stats: StatsDto;
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
    @Type(() => StatsDto)
    stats: StatsDto;
    @Type(() => ResponseMythologyDto)
    mythology: ResponseMythologyDto;
    @Type(() => ResponseGodDto)
    god: ResponseRoleDto;
}
