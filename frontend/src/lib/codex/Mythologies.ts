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

export type ResponseMythologyDto = {
    _id: string;
    name: string;
    shortDesc?: string;
    longDesc?: string;
    images?: ImagesDto;
    effects: ResponseEffectsDto[];
};

async function getMyths(): Promise<ResponseMythologyDto[] | null> {
    let res: Response;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/mythologies`, { next: { revalidate: 3600 } });
    } catch (e: any) {
        console.log("getMyth > Error: ", e.message);
        return null; // new Error("Failed to fetch");
    }
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default getMyths;
