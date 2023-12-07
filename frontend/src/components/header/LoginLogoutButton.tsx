"use client";

import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";

import Link from "next/link";

import { FiLogOut } from "react-icons/fi";
import { printAddress } from "../../lib/utils/address";
import { Button } from "../ui/button";

const LoginLogoutButton = () => {
    const [mounted, setMounted] = useState(false);
    const { address, isConnected } = useAccount();
    const { disconnectAsync } = useDisconnect();

    const handleSignout = async () => {
        await disconnectAsync();
        signOut({ callbackUrl: "/" });
    };

    useEffect(() => setMounted(true), []);
    if (!mounted) return <></>;

    return (
        <div className="flex items-center justify-center gap-4">
            {isConnected && address ? (
                <>
                    <span className="font-base text-base text-gray-300">{printAddress(address)}</span>
                    <Button variant="outline" size="default" onClick={handleSignout} className="flex flex-row gap-2">
                        <FiLogOut />
                        <span>Log Out</span>
                    </Button>
                </>
            ) : (
                <div className="flex items-center justify-center gap-4">
                    <Link href="/auth">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LoginLogoutButton;
