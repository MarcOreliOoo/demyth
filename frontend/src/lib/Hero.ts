import { Stats } from "fs";
import { ResponseMythologyDto } from "./codex/Mythologies";
import { ResponseGodDto } from "./codex/Gods";

type ImagesDto = {
    main: string;
    miniature: string;
    icon: string;
};

export type ResponseHeroGodDto = {
    _id: string;
    god: ResponseGodDto;
};

export type ResponseHeroMythologyDto = {
    _id: string;
    mythology: ResponseMythologyDto;
};

export type RoleDto = {
    _id: string;
    name: string;
};

export type StatsDto = {
    vigor: number;
    dexterity: number;
    mind: number;
    energy: number;
    initiative: number;
};

export type ResponseHeroDto = {
    _id: string;
    user: string;
    name: string;
    sex: string;
    roleInfo: RoleDto;
    stats: StatsDto;
    images: ImagesDto[];
    mythologyInfo: ResponseHeroMythologyDto;
    godInfo: ResponseHeroGodDto;
    level: number;
    xp: number;
};

async function getHeroesForUserId(userId: string): Promise<ResponseHeroDto[] | null> {
    let res: Response;
    try {
        res = await fetch("http://localhost:1804/v0/heroes?userId=6569c8b94e4ac0082d135e0b");
    } catch (e: any) {
        console.log("getHeroForUser > Error: ", e.message);
        return null; // new Error("Failed to fetch");
    }
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default getHeroesForUserId;
