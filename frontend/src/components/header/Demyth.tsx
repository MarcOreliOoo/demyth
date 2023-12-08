import Link from "next/link";
import React from "react";

// TODO: create component for WIP
const Demyth = () => {
    /* pb-3 because blanka is not well middle aligned */
    return (
        <>
            <h1 className={`text-gradient pb-3 font-blanka text-5xl font-light`}>
                <Link href="/">DEMYTH</Link>
            </h1>
            <span className="-ml-16 -rotate-[24deg] rounded border-2 border-yellow-500 px-1 py-0.5 text-center text-sm dark:text-yellow-300">
                Work In Progress
            </span>
        </>
    );
};

export default Demyth;
