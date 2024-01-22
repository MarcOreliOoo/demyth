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

async function getGods(): Promise<ResponseGodDto[] | null> {
    let res: Response;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/gods`, { next: { revalidate: 3600 } });
    } catch (e: any) {
        console.log("getGods > Error: ", e.message);
        return null; // new Error("Failed to fetch");
    }
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default getGods;
