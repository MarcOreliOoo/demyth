"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { glassmorphism } from "@/lib/utils/cssProperties";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Hero = () => {
    return (
        <section className="widescreen:section-min-height tallscreen:section-min-height relative flex scroll-mt-24 flex-row items-center justify-start gap-6 p-6">
            <Card className={`${glassmorphism} `}>
                <CardHeader>
                    <CardTitle>MythologyName</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[300px]">
                        <CardDescription>PowerMythologyName</CardDescription>
                        <p>
                            Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                            wield. Assemble a fellowship with creatures from across all mythologies. Play as a pharaoh
                            warrior of Ra and recruit the legendary Pegasus of Zeus, or enlist the fearsome Cerberus of
                            Hades to aid you on your battles.
                        </p>
                        <br />
                        <CardDescription>PowerMythologyName</CardDescription>
                        <p>
                            Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                            wield. Assemble a fellowship with creatures from across all mythologies. Play as a pharaoh
                            warrior of Ra and recruit the legendary Pegasus of Zeus, or enlist the fearsome Cerberus of
                            Hades to aid you on your battles.
                        </p>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <CardDescription className="flex w-full items-center justify-end">En savoir plus</CardDescription>
                </CardFooter>
            </Card>
            <Card className="">
                <CardContent>
                    <p>
                        Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                        wield. Assemble a fellowship with creatures from across all mythologies. Play as a pharaoh
                        warrior of Ra and recruit the legendary Pegasus of Zeus, or enlist the fearsome Cerberus of
                        Hades to aid you on your battles.
                    </p>
                    <p>
                        PvP and Resource Battles Engage in intense player-versus-player combat and strategic resource
                        battles. Every victory earns you resources, paving the way for the evolution of your fellowship,
                        the expansion of your domain, and the advancement of your hero.
                    </p>
                    <p>
                        NFTs and Marketplace Experience true ownership with our unique NFT system. Your hero and
                        creatures are yours to collect, trade, and showcase. Explore our integrated marketplace for
                        exclusive items, creatures, and more.
                    </p>
                    <p>
                        Join Us on this Epic Journey Embark on a legendary adventure like no other. [Your Games Name]
                        invites you to become a part of a vibrant community of myth-makers, strategists, and conquerors.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <p>
                        Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                        wield. Assemble a fellowship with creatures from across all mythologies. Play as a pharaoh
                        warrior of Ra and recruit the legendary Pegasus of Zeus, or enlist the fearsome Cerberus of
                        Hades to aid you on your battles.
                    </p>
                    <p>
                        PvP and Resource Battles Engage in intense player-versus-player combat and strategic resource
                        battles. Every victory earns you resources, paving the way for the evolution of your fellowship,
                        the expansion of your domain, and the advancement of your hero.
                    </p>
                    <p>
                        NFTs and Marketplace Experience true ownership with our unique NFT system. Your hero and
                        creatures are yours to collect, trade, and showcase. Explore our integrated marketplace for
                        exclusive items, creatures, and more.
                    </p>
                    <p>
                        Join Us on this Epic Journey Embark on a legendary adventure like no other. [Your Games Name]
                        invites you to become a part of a vibrant community of myth-makers, strategists, and conquerors.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <p>
                        Forge Unlikely Alliances In DEMYTH, the bonds you forge are as powerful as the weapons you
                        wield. Assemble a fellowship with creatures from across all mythologies. Play as a pharaoh
                        warrior of Ra and recruit the legendary Pegasus of Zeus, or enlist the fearsome Cerberus of
                        Hades to aid you on your battles.
                    </p>
                    <p>
                        PvP and Resource Battles Engage in intense player-versus-player combat and strategic resource
                        battles. Every victory earns you resources, paving the way for the evolution of your fellowship,
                        the expansion of your domain, and the advancement of your hero.
                    </p>
                    <p>
                        NFTs and Marketplace Experience true ownership with our unique NFT system. Your hero and
                        creatures are yours to collect, trade, and showcase. Explore our integrated marketplace for
                        exclusive items, creatures, and more.
                    </p>
                    <p>
                        Join Us on this Epic Journey Embark on a legendary adventure like no other. [Your Games Name]
                        invites you to become a part of a vibrant community of myth-makers, strategists, and conquerors.
                    </p>
                </CardContent>
            </Card>
        </section>
    );
};

export default Hero;
