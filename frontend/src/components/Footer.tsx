import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../public/demyth_crop.gif";

const Footer = () => {
    return (
        <section>
            <div className="flex flex-row justify-center gap-4 align-middle text-2xl text-slate-200 sm:justify-evenly lg:text-3xl">
                <Link className="hover:text-50 text-slate-200" href="https://www.youtube.com">
                    <FaYoutube />
                </Link>
                <Link className="hover:text-50 text-slate-200" href="https://twitter.com/">
                    <FaTwitter />
                </Link>
                <Link className="hover:text-50 text-slate-200" href="https://github.com/">
                    <FaGithub />
                </Link>
                <Link className="hover:text-50 text-slate-200" href="https://twitter.com/">
                    <FaLinkedin />
                </Link>
            </div>
        </section>
    );
};

export default Footer;
