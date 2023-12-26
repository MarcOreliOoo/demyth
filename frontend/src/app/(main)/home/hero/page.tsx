/* "use client";
import React from "react"; */
import Image from "next/image";
import egyptian1 from "@/../public/images/about/egyptian_1.jpg";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { glassmorphism } from "@/lib/utils/cssProperties";
import { ScrollArea } from "@/components/ui/scroll-area";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-start gap-6 px-6">
            <div className="grid h-[150px] grid-cols-3 grid-rows-1 space-x-6 ">
                <Myth />
                <God />
                <ClassType />
            </div>
            <div className="grid h-[586px] grid-cols-3 grid-rows-1 space-x-6 ">
                <Image
                    src={egyptian1}
                    alt="egyptian1"
                    priority={true}
                    width={800}
                    height={586}
                    placeholder="blur"
                    sizes="(min-width: 1520px) 682px, (min-width: 780px) 45.83vw, calc(100vw - 36px)"
                    className="relative z-[5] mx-auto h-auto w-full rounded-xl border"
                />
                <HeroStats />
            </div>
        </section>
    );
};

const Myth = () => {
    return (
        <Card className={`${glassmorphism}`}>
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
        <Card className={`${glassmorphism}`}>
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
        <Card className={`${glassmorphism}`}>
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
        <Card className={`${glassmorphism} col-span-2`}>
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
