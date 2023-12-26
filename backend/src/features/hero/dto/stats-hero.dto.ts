import { IsNumber, IsPositive } from "class-validator";

export class StatsDto {
    @IsNumber()
    @IsPositive()
    vigor: number;

    @IsNumber()
    @IsPositive()
    dexterity: number;

    @IsNumber()
    @IsPositive()
    mind: number;

    @IsNumber()
    @IsPositive()
    energy: number;

    @IsNumber()
    @IsPositive()
    initiative: number;
}
