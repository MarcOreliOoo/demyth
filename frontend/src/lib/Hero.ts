import { ResponseMythologyDto } from "./codex/Mythologies";

type ImagesDto = {
    main: string;
    miniature: string;
    icon: string;
};

type ResponseEffectsDto = {
    _id: string;
    name: string;
    shortDesc: string;
    icon: string;
};

export type ResponseGodDto = {
    _id: string;
    name: string;
    shortDesc?: string;
    longDesc?: string;
    images?: ImagesDto[];
    powers?: ResponseEffectsDto[];
    mythology: string;
    roles?: string[];
    creatures?: string[];
};

export type ResponseHeroDto = {
    _id: string;
    user: string;
    name: string;
    sex: string;
    role: string;
    images: ImagesDto[];
    mythologyInfo: ResponseMythologyDto;
    godInfo: ResponseGodDto;
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
