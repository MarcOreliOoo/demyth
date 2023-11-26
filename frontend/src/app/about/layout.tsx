import React from "react";
import Footer from "../../components/Footer";
import AboutHeader from "../../components/header/AboutHeader";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="mx-auto flex w-full max-w-10xl flex-col items-center justify-center">
            <AboutHeader />
            {children}
            <Footer />
        </main>
    );
};

export default AboutLayout;
