"use client";

import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";

import Link from "next/link";

import { FiLogOut } from "react-icons/fi";
import { Button } from "../ui/Button";
import { printAddress } from "../../lib/utils/address";

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
                    <span className="text-base font-semibold text-gray-300">{printAddress(address)}</span>
                    <Button variant={"borders"} onClick={handleSignout}>
                        <FiLogOut />
                        LogOut
                    </Button>
                </>
            ) : (
                <div className="flex items-center justify-center gap-4">
                    <Link href="/auth">
                        <Button variant={"filled"}>LogIn</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LoginLogoutButton;
