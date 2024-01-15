"use client";
import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import Image from "next/image";
import egyptian1 from "@/../public/images/about/egyptian_1.jpg";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { glassmorphism } from "@/lib/utils/cssProperties";
import { ScrollArea } from "@/components/ui/scroll-area";
import getHeroesForUserId, { ResponseHeroDto, StatsDto } from "@/lib/Hero";
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <h1 className="text-4xl">{heroData?.name}</h1>
                <Myth />
                <God />
                <ClassType />
            </div>
            <div className="flex h-[586px] w-full flex-wrap items-stretch justify-start gap-6">
                <Image
                    src={egyptian1}
                    alt="egyptian1"
                    priority={true}
                    placeholder="blur"
                    sizes="(min-width: 1520px) 682px, (min-width: 780px) 45.83vw, calc(100vw - 36px)"
                    className="h-[586px] w-auto rounded-xl border sm:flex-none"
                />
                <HeroStats stats={heroData?.stats} />
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

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <Card className={`${glassmorphism} h-36 w-48`}>
                <ScrollArea className="h-full">
                    <CardHeader>
                        <CardTitle>{`${label} : ${payload[0].value}`}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>PowerClassType</CardDescription>
                        <p>
                            Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                            wield. Assemble a fellowship with creatures from across all mythologies.
                        </p>
                    </CardContent>
                </ScrollArea>
            </Card>
        );
    }

    return null;
};

type HeroStatsProps = {
    stats?: ResponseHeroDto["stats"];
};

const HeroStats = ({ stats }: HeroStatsProps) => {
    const keys = Object.keys(stats || {}) as Array<keyof ResponseHeroDto["stats"]>;
    const resultStats = keys.map((key) => ({
        stat: key.charAt(0).toUpperCase() + key.slice(1),
        value: stats?.[key] ?? 0,
    }));

    return (
        <Card className={`${glassmorphism} h-full min-w-[350px] flex-grow`}>
            <CardHeader>
                <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <ScrollArea className="h-full border border-blue-300">
                <CardContent className="flex flex-grow items-center justify-center border border-red-400 p-2">
                    <ResponsiveContainer width="100%" height={350} className="border border-yellow-500 p-6">
                        <RadarChart
                            cx="50%"
                            cy="55%"
                            outerRadius="80%"
                            data={resultStats}
                            className="border border-green-500"
                        >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="stat" />
                            <PolarRadiusAxis />
                            <Radar name="stat" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
                            <Tooltip content={<CustomTooltip />} />
                        </RadarChart>
                    </ResponsiveContainer>
                </CardContent>
            </ScrollArea>
        </Card>
    );
};

export default Hero;
