import { IsString, IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsArray, IsMongoId } from "class-validator";
import { eGods } from "../../../enums/gods";
import { Type } from "class-transformer";
import { ImagesDto } from "./images-god.dto";
import { PowersDto } from "./powers-god.dto";

export class CreateGodDto {
    @IsEnum(eGods)
    name: eGods;

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
}
