"use client";
import { useState } from "react";

import Link from "next/link";

import clsx from "clsx";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { links } from "../../lib/data/AboutHeaderMenu";

const ToggleMenu = () => {
    const [toggle, setToggle] = useState(false);
    const [activeSection, setActiveSection] = useState("About");

    return (
        <div className="flex ">
            <div className="text-3xl" onClick={() => setToggle((prev) => !prev)}>
                {toggle ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
            </div>
            <div
                className={`${
                    toggle ? "flex" : "hidden"
                } bg-black-gradient absolute right-0 top-20 mx-4 my-2 w-[140px] min-w-[140px] rounded-xl opacity-[97%]`}
            >
                <ul
                    className="flex w-full flex-col gap-y-2 pt-2 text-xl leading-normal md:pb-2"
                    onClick={() => setToggle((prev) => !prev)}
                >
                    {links.map((link) => (
                        <li key={link.hash} className={`relative w-full`}>
                            <Link
                                href={link.hash}
                                onClick={() => setActiveSection(link.name)}
                                className={clsx(
                                    "relative flex w-full flex-row justify-end pr-4 text-lg leading-normal transition duration-300 ease-in-out hover:text-astral",
                                )}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="absolute right-0 top-0 -z-10 h-full border-l-2 border-astral pr-2 text-astral"
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
                    <li className="w-full flex-1 md:hidden">
                        <button
                            type="button"
                            className="w-full border-t border-gold-600 py-2 pr-4 text-end text-gold-600 transition duration-150 ease-in-out hover:border-astral hover:text-astral focus:bg-shark-900 focus:outline-none focus:ring-0 active:bg-shark-800 active:text-astral"
                        >
                            <Link href={"#features"}>Login</Link>
                        </button>
                        <button
                            type="button"
                            className="w-full rounded-b-xl border border-shark-900 bg-gradient-to-r from-gold-400 to-gold-600 py-2 pr-4 text-end text-shark-900 transition duration-150 ease-in-out hover:bg-gradient-to-r hover:from-astral-300 hover:to-astral-500 focus:border-astral-600 focus:bg-gradient-to-r focus:from-astral focus:to-astral-600 focus:outline-none focus:ring-0 active:border-astral active:bg-astral"
                        >
                            <Link href={"/about"}>Sign up</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ToggleMenu;
