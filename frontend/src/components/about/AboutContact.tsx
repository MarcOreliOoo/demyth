import Image from "next/image";

const AboutContact = () => {
    return (
        <section
            id="contact"
            className="relative flex w-full scroll-mt-24 flex-col items-center justify-start overflow-x-hidden"
        >
            <p>Contact</p>
            <Image
                src="/images/mythologies/japanese/7f1c8582-3d8f-444e-8a2f-9db22c6b836d.webp"
                alt="Picture of the author"
                width={700}
                height={850}
            />
        </section>
    );
};

export default AboutContact;
