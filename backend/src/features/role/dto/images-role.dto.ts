import { IsString, IsOptional, IsEnum } from "class-validator";
import { EHeroGender } from "../../../enums";

export class ImagesDto {
    @IsString()
    main: string;

    @IsEnum(EHeroGender)
    sex: EHeroGender;
}
