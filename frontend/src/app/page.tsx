import Link from "next/link";
import Image from "next/image";
import logo from "../../public/demyth_crop.gif";

// TODO position gradient div at the same level that anim stars and twinkling
const Home = () => {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center font-spaceGrotesk">
            <div className="background-container">
                <div className="flex min-h-screen min-w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black from-25% to-shark">
                    <div className="relative z-10">
                        <Link href="/about">
                            <Image src={logo} alt="DEMYTH" className="mx-auto block scale-90" />
                        </Link>
                        <span className="w-full -rotate-[24deg] rounded border-2 border-yellow-500 px-1 py-0.5 text-center text-xl dark:text-yellow-300">
                            Work In Progress
                        </span>
                    </div>

                    <div className="stars"></div>
                    <div className="twinkling"></div>
                </div>
            </div>
        </main>
    );
};

export default Home;
