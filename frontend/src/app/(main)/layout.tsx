import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative mx-auto flex w-full max-w-10xl flex-col items-center justify-center">
            <div className="blue__gradient absolute left-0 top-0 z-[0] h-[35%] w-[75%] rounded-md" />
            <div className="pink__gradient absolute bottom-0 right-0 z-[0] h-[45%] w-[75%] rounded-full" />
            <Header />
            {children}
            <Footer />
        </main>
    );
}
