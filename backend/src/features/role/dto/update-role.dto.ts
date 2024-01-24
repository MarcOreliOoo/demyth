import { IsOptional, IsString, IsEnum, ValidateNested, IsArray, IsMongoId } from "class-validator";
import { EClassSubType, EClassType } from "../../../enums";
import { Type } from "class-transformer";
import { ImagesDto } from "./images-role.dto";
import { StatsRoleDto } from "./stats-role.dto";

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
    @Type(() => StatsRoleDto)
    stats?: StatsRoleDto;

    @IsOptional()
    @IsMongoId()
    mythology?: string;

    @IsOptional()
    @IsMongoId()
    god?: string;
}
