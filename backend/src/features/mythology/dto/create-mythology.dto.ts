import { IsString, IsEnum, ValidateNested, IsArray } from "class-validator";
import { EMythologies } from "../../../enums";
import { Type } from "class-transformer";
import { ImagesDto } from "./images-mythology.dto";
import { EffectsDto } from "./effects-mythology.dto";

export class CreateMythologyDto {
    @IsEnum(EMythologies)
    name: EMythologies;

    @IsString()
    shortDesc: string;

    @IsString()
    longDesc: string;

    @ValidateNested()
    @Type(() => ImagesDto)
    images: ImagesDto;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EffectsDto)
    effects: EffectsDto[];
}
