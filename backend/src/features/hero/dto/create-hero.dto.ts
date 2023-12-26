import { IsString, IsNotEmpty, IsEnum, ValidateNested, IsArray } from "class-validator";
import { EHeroGender } from "../../../enums";
import { ImagesDto } from "./images-hero.dto";
import { Type } from "class-transformer";

export class CreateHeroDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(EHeroGender)
    sex: EHeroGender;

    @IsString()
    role: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagesDto)
    images: ImagesDto[];
}
