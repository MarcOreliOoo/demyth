"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

// TODO: fix image weight
// TODO: add music
// TODO: create component for WIP
const Home = () => {
    const { data: session } = useSession();
    console.log("Home > Session : ", { session });

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center">
            <div className="background-container">
                <div className="flex min-h-screen min-w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black from-25% to-shark">
                    <div className="relative z-10">
                        {/* <Link href="/about">
                            <Image src={logo} alt="DEMYTH" className="mx-auto block scale-90" />
                        </Link> */}
                        {session && session.user ? (
                            <Link href="/home">
                                <span className="text-gradient font-blanka text-9xl">DEMYTH</span>
                            </Link>
                        ) : (
                            <Link href="/about">
                                <span className="text-gradient font-blanka text-9xl">DEMYTH</span>
                            </Link>
                        )}
                        <span className="absolute top-0 max-w-[200px] -rotate-[24deg] rounded border-2 border-yellow-500 px-1 py-0.5 text-center text-xl dark:text-yellow-300">
                            Work In Progress
                        </span>
                    </div>

                    <div className="stars"></div>
                    <div className="twinkling"></div>
                </div>
            </div>
        </main>
    );
};

export default Home;
