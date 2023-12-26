import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="section-min-height relative mx-auto flex w-full max-w-10xl flex-col items-center justify-center">
            <div className="blue__gradient__linear absolute left-0 top-0 z-[0] h-[100%] w-[100%]" />
            <div className="pink__gradient__linear absolute bottom-0 right-0 z-[0] h-[100%] w-[100%]" />
            <Header />
            {children}
            <Footer />
        </main>
    );
}
