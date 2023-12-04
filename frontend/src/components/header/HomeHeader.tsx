"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, ComponentProps } from "react";
import { links } from "../../lib/AboutHeaderMenu";
import Demyth from "./Demyth";
import ToggleMenu from "./ToggleMenu";
import { useAccount, useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { Button } from "../ui/Button";
import { printAddress } from "../../lib/utils/address";

const HomeHeader = () => {
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState("About");
    const { address, isConnected } = useAccount();
    const { disconnectAsync } = useDisconnect();

    const handleSignout = async () => {
        await disconnectAsync();
        signOut({ callbackUrl: "/" });
    };

    useEffect(() => setMounted(true), []);
    if (!mounted) return <></>;

    return (
        <header className="relative z-[999]">
            <nav
                className={clsx(
                    "fixed left-1/2 top-0 flex w-full max-w-10xl -translate-x-1/2 flex-row flex-nowrap items-center justify-between gap-x-6 p-4",
                    "border-b border-solid border-shark-800/70 bg-shark bg-opacity-95",
                    "md:px-8",
                )}
            >
                <Demyth />

                <div className="hidden w-full items-center justify-end gap-4 md:flex">
                    <ul className="mr-4 hidden gap-4 lg:flex">
                        {links.map((link) => (
                            <li key={link.hash} className="relative flex items-center justify-center">
                                <Link
                                    href={link.hash}
                                    onClick={() => setActiveSection(link.name)}
                                    className={clsx(
                                        "flex flex-col text-lg leading-normal transition duration-300 ease-in-out hover:text-astral",
                                    )}
                                >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                            className="absolute inset-0 -z-10 border-b border-astral pt-[1px] text-astral"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-center gap-4">
                        {isConnected && address ? (
                            <>
                                <span className="text-base font-semibold text-gray-300">{printAddress(address)}</span>
                                <Button variant={"borders"} onClick={handleSignout}>
                                    <FiLogOut />
                                    LogOut
                                </Button>
                            </>
                        ) : (
                            <div className="flex items-center justify-center gap-4">
                                <Link href="/auth">
                                    <Button variant={"filled"}>LogIn</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="block lg:hidden">
                    <ToggleMenu />
                </div>
            </nav>
        </header>
    );
};

export default HomeHeader;
