import { Type, Transform } from "class-transformer";
import { EHeroGender } from "../../../enums";
import { ObjectId } from "mongoose";
import { ImagesDto } from "./images-hero.dto";
import { MythologyInfoDto } from "./mythologyInfo-hero.dto";
import { GodInfoDto } from "./godInfo-hero.dto";
import { StatsDto } from "./stats-hero.dto";
import { RoleInfoDto } from "./roleinfo-hero.dto";

// TODO: add ImagesDto in Db
export class ResponseHeroDto {
    @Transform((value) => value.obj._id.toString())
    _id: ObjectId;
    @Transform((value) => value.obj.user.toString())
    user: ObjectId;
    name: string;
    sex: EHeroGender;
    @Type(() => RoleInfoDto)
    roleInfo: RoleInfoDto;
    @Type(() => StatsDto)
    stats: StatsDto;
    @Type(() => ImagesDto)
    images: ImagesDto[];
    @Type(() => MythologyInfoDto)
    mythologyInfo: MythologyInfoDto;
    @Type(() => GodInfoDto)
    godInfo: GodInfoDto;
    level: number;
    xp: number;
}
