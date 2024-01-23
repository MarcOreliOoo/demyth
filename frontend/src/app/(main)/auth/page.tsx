"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

import { signIn, useSession, signOut } from "next-auth/react";
import { polygonMumbai } from "viem/chains";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/ui/icons";
import { _Alert, EAlertVariant } from "@/components/ui/shadderivated/_alert";
import { printAddress } from "@/lib/utils/address";
import { UserRejectedRequestError } from "viem";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { FiLogOut } from "react-icons/fi";
import { getSiweMessages } from "@/lib/utils/siwe";
import { glassmorphism } from "../../../lib/utils/cssProperties";
import { cn } from "../../../lib/utils";

const AuthPage = () => {
    //Hydratation error
    const [mounted, setMounted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasSigned, setHasSigned] = useState<boolean>(false);
    const [isWeb3Auth, setIsWeb3Auth] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal();
    const { disconnectAsync } = useDisconnect();
    const { signMessageAsync } = useSignMessage();

    const { data: session } = useSession();
    const searchParams = useSearchParams();

    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (searchParams.get("error")) {
            setError(searchParams.get("error"));
        }
        console.log("searchParams: ", searchParams);
    }, [searchParams]);
    if (!mounted) return <></>;
    if (session) redirect("/home");

    const handleConnect = async () => {
        setIsWeb3Auth(true);
        if (!isConnected) open();
    };

    const handleSign = async () => {
        setIsLoading(true);
        setIsWeb3Auth(true);

        try {
            if (!isConnected) open();

            const { message, signedMessage } = await getSiweMessages({
                address,
                id: polygonMumbai.id,
                signMessageAsync,
            });

            setHasSigned(true);

            const response = await signIn("web3SignIn", {
                message: JSON.stringify(message),
                signedMessage,
                redirect: true,
                callbackUrl: "/home",
            });

            if (response?.error) {
                console.log("response.error: ", response.error);
                throw new Error(response.error);
            }
        } catch (error) {
            if (error instanceof UserRejectedRequestError) {
                setError(error.message);
            } else {
                setError("An unknown error occurred: " + error);
            }
        }
    };

    const handleError = () => {
        setError(null);
        setIsLoading(false);
        setIsWeb3Auth(false);
    };

    const handleSignout = async () => {
        await disconnectAsync();
        await signOut({ callbackUrl: "/auth" });
    };

    const handleSignup = async () => {
        setIsLoading(true);
        setIsWeb3Auth(true);

        try {
            if (!isConnected) open();

            const { message, signedMessage } = await getSiweMessages({
                address,
                id: polygonMumbai.id,
                signMessageAsync,
            });

            setHasSigned(true);

            const response = await signIn("web3SignUp", {
                message: JSON.stringify(message),
                signedMessage,
                redirect: true,
                callbackUrl: "/home",
            });

            if (response?.error) {
                throw new Error(response.error);
            }
        } catch (error) {
            if (error instanceof UserRejectedRequestError) {
                setError(error.message);
            } else {
                setError("An unknown error occurred: " + error);
            }
        }
    };

    return (
        <main className="section-min-height relative flex h-full scroll-mt-24 flex-col items-center justify-center">
            <div className="brown__gradient absolute z-[0] h-[50%] w-[50%] bg-opacity-5" />
            {(!isConnected || (isConnected && !hasSigned)) && (
                <Tabs defaultValue="signin" className="container relative z-[1] sm:w-[480px]">
                    <TabsList className={cn(` grid w-full grid-cols-2`)}>
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        {searchParams.get("Error") || error ? (
                            <_Alert
                                evariant={EAlertVariant.DESTRUCTIVE}
                                content={searchParams.get("Error") ?? error!}
                                title="Something went wrong!"
                            >
                                <Button onClick={handleError} variant={"link"}>
                                    Try again
                                </Button>
                            </_Alert>
                        ) : (
                            <Card className={cn(`${glassmorphism}`)}>
                                {isConnected && !hasSigned ? (
                                    <CardHeader>
                                        <CardTitle>{printAddress(address ?? "")}</CardTitle>
                                        <CardDescription>Sign a message to finish login</CardDescription>
                                    </CardHeader>
                                ) : (
                                    <CardHeader>
                                        <CardTitle>Sign In</CardTitle>
                                        <CardDescription>Sign in by connecting your web3 wallet</CardDescription>
                                    </CardHeader>
                                )}
                                <CardContent className="space-y-8">
                                    {!isConnected ? (
                                        <Button className="w-full" onClick={handleConnect}>
                                            Connect Wallet
                                        </Button>
                                    ) : (
                                        <div className="flex flex-row gap-4">
                                            <Button
                                                className="w-full flex-1"
                                                variant={"outline"}
                                                onClick={handleSignout}
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <FiLogOut className="mr-2 h-4 w-4" />
                                                )}{" "}
                                                Disconnect Wallet
                                            </Button>
                                            <Button className="w-full flex-1" disabled={isLoading} onClick={handleSign}>
                                                {isLoading ? (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Pencil1Icon className="mr-2 h-4 w-4" />
                                                )}{" "}
                                                Sign Message
                                            </Button>
                                        </div>
                                    )}
                                    {!isWeb3Auth && (
                                        <div className="space-y-4">
                                            <Separator />
                                            <div className="grid grid-cols-3 gap-2">
                                                <Button variant="outline" type="button" disabled={isLoading}>
                                                    {isLoading ? (
                                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <Icons.gitHub className="mr-2 h-4 w-4" />
                                                    )}{" "}
                                                    Github
                                                </Button>
                                                <Button variant="outline" type="button" disabled={isLoading}>
                                                    {isLoading ? (
                                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <Icons.google className="mr-2 h-4 w-4" />
                                                    )}{" "}
                                                    Google
                                                </Button>
                                                <Button variant="outline" type="button" disabled={isLoading}>
                                                    {isLoading ? (
                                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <Icons.twitter className="mr-2 h-4 w-4" />
                                                    )}{" "}
                                                    Twitter
                                                </Button>
                                            </div>
                                            <Separator />
                                            <div className="space-y-2">
                                                <Label className="sr-only" htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    type="email"
                                                    autoCapitalize="none"
                                                    autoComplete="email"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                />
                                                <Button className="w-full" variant="outline" disabled={isLoading}>
                                                    {isLoading && (
                                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                    )}
                                                    Sign In with Email
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>
                    <TabsContent value="signup">
                        <Card className={cn(`${glassmorphism}`)}>
                            {isConnected && !hasSigned ? (
                                <CardHeader>
                                    <CardTitle>{printAddress(address ?? "")}</CardTitle>
                                    <CardDescription>Sign a message to finish sign up</CardDescription>
                                </CardHeader>
                            ) : (
                                <CardHeader>
                                    <CardTitle>Sign Up</CardTitle>
                                    <CardDescription>Sign up by connecting your web3 wallet</CardDescription>
                                </CardHeader>
                            )}
                            <CardContent className="space-y-8">
                                {!isConnected ? (
                                    <Button className="w-full" onClick={handleConnect}>
                                        Connect Wallet
                                    </Button>
                                ) : (
                                    <div className="flex flex-row gap-4">
                                        <Button
                                            className="w-full flex-1"
                                            variant={"outline"}
                                            onClick={handleSignout}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                            ) : (
                                                <FiLogOut className="mr-2 h-4 w-4" />
                                            )}{" "}
                                            Disconnect Wallet
                                        </Button>
                                        <Button className="w-full flex-1" disabled={isLoading} onClick={handleSignup}>
                                            {isLoading ? (
                                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                            ) : (
                                                <Pencil1Icon className="mr-2 h-4 w-4" />
                                            )}{" "}
                                            Sign Message
                                        </Button>
                                    </div>
                                )}
                                {!isWeb3Auth && (
                                    <div className="space-y-4">
                                        <Separator />
                                        <div className="grid grid-cols-3 gap-2">
                                            <Button variant="outline" type="button" disabled={isLoading}>
                                                {isLoading ? (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Icons.gitHub className="mr-2 h-4 w-4" />
                                                )}{" "}
                                                Github
                                            </Button>
                                            <Button variant="outline" type="button" disabled={isLoading}>
                                                {isLoading ? (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Icons.google className="mr-2 h-4 w-4" />
                                                )}{" "}
                                                Google
                                            </Button>
                                            <Button variant="outline" type="button" disabled={isLoading}>
                                                {isLoading ? (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Icons.twitter className="mr-2 h-4 w-4" />
                                                )}{" "}
                                                Twitter
                                            </Button>
                                        </div>
                                        <Separator />
                                        <div className="space-y-2">
                                            <Label className="sr-only" htmlFor="email">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                placeholder="name@example.com"
                                                type="email"
                                                autoCapitalize="none"
                                                autoComplete="email"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                            />
                                            <Button className="w-full" variant="outline" disabled={isLoading}>
                                                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                                                Sign Up with Email
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                <Button>Save signup</Button>
                                <p className="px-8 text-center text-sm text-muted-foreground">
                                    By clicking continue, you agree to our{" "}
                                    <Link
                                        href="/home/terms"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/home/privacy"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .{" "}
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            )}
        </main>
    );
};

const Separator = () => {
    return (
        <div className="relative grid w-full grid-cols-5 grid-rows-1 place-content-center place-items-center">
            <span className="col-span-2 w-full border-t" />
            <span className={`-space-x-6 text-xs uppercase text-muted-foreground`}>Or</span>
            <span className="col-span-2 w-full border-t" />
        </div>
    );
};

export default AuthPage;
