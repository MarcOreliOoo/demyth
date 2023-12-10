"use client";

import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { TLinks } from "../../lib/AboutHeaderMenu";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";

const Menu = ({ links }: { links: TLinks }) => {
    const [activeSection, setActiveSection] = useState("About");
    return (
        <ul className="mr-4 hidden gap-4 lg:flex">
            {links.map((link) => (
                <li key={link.hash} className="relative flex items-center justify-center">
                    <Link
                        href={link.hash}
                        onClick={() => setActiveSection(link.name)}
                        className={cn(
                            buttonVariants({ variant: "link", size: "default" }),
                            "flex flex-col text-base leading-normal transition duration-300 ease-in-out hover:no-underline",
                        )}
                    >
                        {link.name}
                        {link.name === activeSection && (
                            <motion.span
                                className="absolute inset-0 -z-10 border-b border-primary pt-[1px] text-primary"
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
