"use client";
import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    return (
        <main className="widescreen:section-min-height tallscreen:section-min-height relative mt-24 flex w-full scroll-mt-24 flex-row">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={`${isSidebarOpen ? "ml-64" : "ml-20"} relative flex-1 border border-orange-300`}>
                {children}
            </div>
        </main>
    );
}
