import { IsString, IsEnum, ValidateNested, IsArray, IsMongoId, IsOptional } from "class-validator";
import { EGods } from "../../../enums";
import { Type } from "class-transformer";
import { ImagesDto } from "./images-god.dto";
import { PowersDto } from "./powers-god.dto";

export class CreateGodDto {
    @IsEnum(EGods)
    name: EGods;

    @IsString()
    shortDesc: string;

    @IsString()
    longDesc: string;

    @ValidateNested()
    @Type(() => ImagesDto)
    images: ImagesDto;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PowersDto)
    powers: PowersDto[];

    @IsMongoId()
    mythology: string;

    @IsOptional()
    @IsArray()
    @Type(() => String)
    roles: string[];

    @IsOptional()
    @IsArray()
    @Type(() => String)
    creatures: string[];
}
