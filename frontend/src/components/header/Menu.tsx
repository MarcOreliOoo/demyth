"use client";

import { useState } from "react";

import Link from "next/link";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { TLinks } from "../../lib/AboutHeaderMenu";

const Menu = ({ links }: { links: TLinks }) => {
    const [activeSection, setActiveSection] = useState("About");
    return (
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
    );
};

export default Menu;
