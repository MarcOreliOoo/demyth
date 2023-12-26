import type { Metadata } from "next";
import { blanka, spaceGrotesk } from "./fonts/fonts";
import "./globals.css";
import React from "react";
import Providers from "../providers/Providers";

export const metadata: Metadata = {
    title: "Demyth",
    description: "Play Demyth, a Web3 strategy game based on mythology, play & earn NFTs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${blanka.variable}`}>
            <body className={`section-min-height bg-background font-spaceGrotesk text-foreground`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
