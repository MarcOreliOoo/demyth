"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
    const { data: session } = useSession();
    console.log({ session });

    if (session && session.user)
        return (
            <div className="ml-auto flex gap-4">
                <p className="text-sky-600">{session.user.address}</p>
                <Link href={"/api/auth/signout"} className="ml-auto flex gap-4 text-red-600">
                    Sign Out
                </Link>
            </div>
        );

    return (
        <div className="ml-auto flex items-center gap-4">
            <Link href={"/api/auth/signin"} className="ml-auto flex gap-4 text-green-600">
                Sign In
            </Link>
            <Link href={"/signup"} className="ml-auto flex gap-4 rounded bg-green-600 p-2 text-green-200">
                Sign Up
            </Link>
        </div>
    );
};

export default SignInButton;
