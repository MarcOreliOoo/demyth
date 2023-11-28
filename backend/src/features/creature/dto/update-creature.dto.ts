import { IsOptional, IsString, IsEnum, IsMongoId, IsNumber, IsPositive } from "class-validator";
import { EClassSubType, EClassType } from "../../../enums";

export class UpdateCreatureDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEnum(EClassType)
    unitType?: EClassType;

    @IsOptional()
    @IsEnum(EClassSubType)
    subUnitType?: EClassSubType;

    @IsOptional()
    @IsString()
    shortDesc?: string;

    @IsOptional()
    @IsString()
    longDesc?: string;

    @IsOptional()
    @IsString()
    image: string;

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
