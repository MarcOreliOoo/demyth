import { IsNumber, IsPositive } from "class-validator";

export class StatsRoleDto {
    @IsPositive()
    @IsNumber()
    vigor: number;

    @IsPositive()
    @IsNumber()
    dexterity: number;

    @IsPositive()
    @IsNumber()
    mind: number;

    @IsPositive()
    @IsNumber()
    energy: number;

    @IsPositive()
    @IsNumber()
    initiative: number;
}
