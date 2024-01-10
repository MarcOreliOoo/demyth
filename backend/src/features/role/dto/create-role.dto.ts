import { IsString, IsEnum, ValidateNested, IsArray, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ImagesDto } from "./images-role.dto";
import { EClassSubType, EClassType, EGods, EMythologies } from "../../../enums";
import { StatsRoleDto } from "./stats-role.dto";

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(EClassType)
    roleType: EClassType;

    @IsEnum(EClassSubType)
    roleSubType: EClassSubType;

    @IsString()
    shortDesc: string;

    @IsString()
    longDesc: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagesDto)
    images: ImagesDto[];

    @ValidateNested()
    @Type(() => StatsRoleDto)
    stats: StatsRoleDto;

    @IsEnum(EMythologies)
    mythology: EMythologies;

    @IsEnum(EGods)
    god: EGods;
}
