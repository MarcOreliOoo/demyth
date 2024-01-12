"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import egyptian1 from "@/../public/images/about/egyptian_1.jpg";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { glassmorphism } from "@/lib/utils/cssProperties";
import { ScrollArea } from "@/components/ui/scroll-area";
import getHeroesForUserId, { ResponseHeroDto } from "@/lib/Hero";
import { useSession } from "next-auth/react";

const Hero = () => {
    const { data: session } = useSession();
    const [heroData, setHeroData] = useState<ResponseHeroDto | null>({} as ResponseHeroDto);

    useEffect(() => {
        (async () => {
            if (!session?.user?._id) return;
            const heroes = await getHeroesForUserId(session?.user?._id);
            if (heroes && heroes.length > 0) {
                setHeroData(heroes[0]);
            }
        })();
    }, [session?.user?._id]);

    // TODO: add suspense and fallback
    // TODO: add caching + get it in context hook
    if (heroData === null) return <div>loading...</div>;
    return (
        <section className="flex flex-col items-center justify-start gap-6 px-6">
            <div className="grid grid-cols-1 gap-6 border border-green-200 md:grid-cols-2 lg:grid-cols-3">
                <h1 className="text-4xl">{heroData?.name}</h1>
                <Myth />
                <God />
                <ClassType />
            </div>
            <div className="flex h-[586px] w-full flex-wrap items-stretch justify-start gap-6 border border-red-200">
                <Image
                    src={egyptian1}
                    alt="egyptian1"
                    priority={true}
                    width={800}
                    height={586}
                    placeholder="blur"
                    sizes="(min-width: 1520px) 682px, (min-width: 780px) 45.83vw, calc(100vw - 36px)"
                    className="h-[586px] w-auto rounded-xl border sm:flex-none"
                />
                <HeroStats />
            </div>
        </section>
    );
};

const Myth = () => {
    return (
        <Card className={`${glassmorphism} h-[150px]`}>
            <ScrollArea className="h-full">
                <CardHeader>
                    <CardTitle>MythologyName</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>PowerMythologyName</CardDescription>
                    <p>
                        Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                        wield. Assemble a fellowship with creatures from across all mythologies.
                    </p>
                </CardContent>
                <CardFooter>
                    <CardDescription className="flex w-full items-center justify-end">En savoir plus</CardDescription>
                </CardFooter>
            </ScrollArea>
        </Card>
    );
};

const God = () => {
    return (
        <Card className={`${glassmorphism} h-[150px]`}>
            <ScrollArea className="h-full">
                <CardHeader>
                    <CardTitle>GodName</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>PowerGodName</CardDescription>
                    <p>
                        Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                        wield. Assemble a fellowship with creatures from across all mythologies.
                    </p>
                </CardContent>
                <CardFooter>
                    <CardDescription className="flex w-full items-center justify-end">En savoir plus</CardDescription>
                </CardFooter>
            </ScrollArea>
        </Card>
    );
};

const ClassType = () => {
    return (
        <Card className={`${glassmorphism} h-[150px] `}>
            <ScrollArea className="h-full">
                <CardHeader>
                    <CardTitle>ClassType</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>PowerClassType</CardDescription>
                    <p>
                        Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                        wield. Assemble a fellowship with creatures from across all mythologies.
                    </p>
                </CardContent>
                <CardFooter>
                    <CardDescription className="flex w-full items-center justify-end">En savoir plus</CardDescription>
                </CardFooter>
            </ScrollArea>
        </Card>
    );
};

const HeroStats = () => {
    return (
        <Card className={`${glassmorphism} h-full flex-grow`}>
            <ScrollArea className="h-full">
                <CardHeader>
                    <CardTitle>HeroStats</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>HeroStats</CardDescription>
                    <p>HexagonStats</p>
                    <p>HexagonStats</p>
                    <p>HexagonStats</p>
                    <p>HexagonStats</p>
                </CardContent>
            </ScrollArea>
        </Card>
    );
};

export default Hero;
