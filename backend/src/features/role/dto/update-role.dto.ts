import {
    IsOptional,
    IsString,
    IsEnum,
    ValidateNested,
    IsArray,
    IsMongoId,
    IsNumber,
    IsPositive,
} from "class-validator";
import { EClassSubType, EClassType } from "../../../enums";
import { Type } from "class-transformer";
import { ImagesDto } from "./images-role.dto";

export class UpdateRoleDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEnum(EClassType)
    roleType?: EClassType;

    @IsOptional()
    @IsEnum(EClassSubType)
    roleSubType?: EClassSubType;

    @IsOptional()
    @IsString()
    shortDesc?: string;

    @IsOptional()
    @IsString()
    longDesc?: string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagesDto)
    images?: ImagesDto[];

    @IsOptional()
    @IsPositive()
    @IsNumber()
    strength?: number;
    @IsOptional()
    @IsPositive()
    @IsNumber()
    dexterity?: number;
    @IsOptional()
    @IsPositive()
    @IsNumber()
    intelligence?: number;
    @IsOptional()
    @IsPositive()
    @IsNumber()
    constitution?: number;
    @IsOptional()
    @IsPositive()
    @IsNumber()
    luck?: number;
    @IsOptional()
    @IsPositive()
    @IsNumber()
    armor?: number;

    @IsOptional()
    @IsMongoId()
    mythology?: string;

    @IsOptional()
    @IsMongoId()
    god?: string;
}
