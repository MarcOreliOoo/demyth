import { clsx } from "clsx";
import { links } from "../../lib/data/AboutHeaderMenu";
import Demyth from "./Demyth";
import ToggleMenu from "./ToggleMenu";
import Menu from "./Menu";
import LoginLogoutButton from "./LoginLogoutButton";

const Header = () => {
    return (
        <header className="relative z-[999]">
            <nav
                className={clsx(
                    "fixed left-1/2 top-0 flex w-full max-w-10xl -translate-x-1/2 flex-row flex-nowrap items-center justify-between gap-x-6 p-4",
                    "blur-saturate-glass bg-glassmorphism text-glassmorphism-foreground hover:bg-glassmorphism-hover",
                    "md:px-8",
                )}
            >
                <Demyth />

                <div className="hidden w-full items-center justify-end gap-4 md:flex">
                    <Menu links={links} />
                    <LoginLogoutButton />
                </div>

                <div className="block lg:hidden">
                    <ToggleMenu />
                </div>
            </nav>
        </header>
    );
};

export default Header;
