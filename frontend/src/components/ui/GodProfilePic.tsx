import React from "react";
import Image from "next/image";
import godPic from "../../public/images/roles/hero1.png";

const GodProfilePic = () => {
    return (
        <section className="m-auto">
            <Image
                className="mx-auto mt-8 rounded-2xl border-2 border-shark shadow-black drop-shadow-xl"
                src={godPic}
                alt="anHero"
                quality={100}
                priority={true}
            />
        </section>
    );
};

export default GodProfilePic;
