import { Sidebar } from "../../../components/sidebar/Sidebar";
export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="widescreen:section-min-height tallscreen:section-min-height relative mt-24 flex w-full scroll-mt-24">
            <Sidebar />
            <div className="ml-64 flex-1">{children}</div>
        </main>
    );
}
