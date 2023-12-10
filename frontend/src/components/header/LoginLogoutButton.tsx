"use client";

import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { signOut, useSession } from "next-auth/react";

import Link from "next/link";

import { FiLogOut, FiArrowUpRight } from "react-icons/fi";
import { printAddress } from "../../lib/utils/address";
import { Button } from "../ui/button";

const LoginLogoutButton = () => {
    const [mounted, setMounted] = useState(false);
    const { address, isConnected } = useAccount();
    const { disconnectAsync } = useDisconnect();
    const { data: session } = useSession();

    const handleSignout = async () => {
        await disconnectAsync();
        await signOut({ callbackUrl: "/about" });
    };

    useEffect(() => setMounted(true), []);
    if (!mounted) return <></>;

    return (
        <div className="flex items-center justify-center gap-4">
            {session ? (
                <>
                    <span className="font-base text-base text-gray-300">
                        {session.user.address ? printAddress(session.user.address) : session.user.email}
                    </span>
                    <Button variant="outline" onClick={handleSignout}>
                        <FiLogOut className="mr-2 h-4 w-4" />
                        <span>Log Out</span>
                    </Button>
                </>
            ) : (
                <div className="flex items-center justify-center gap-4">
                    <Link href="/auth">
                        <Button>
                            <FiArrowUpRight className="mr-2 h-5 w-5" />
                            Get Started
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LoginLogoutButton;
