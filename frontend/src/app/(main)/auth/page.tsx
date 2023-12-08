"use client";

import React, { useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { polygonMumbai } from "viem/chains";
import { useAccount, useSignMessage } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { signIn, getCsrfToken, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Icons } from "../../../components/ui/icons";
import { printAddress } from "../../../lib/utils/address";
import { redirect } from "next/navigation";

const AuthPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasSigned, setHasSigned] = useState<boolean>(false);

    const [isWeb3Auth, setIsWeb3Auth] = useState<boolean>(false);
    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal();
    const { signMessageAsync } = useSignMessage();

    const { data: session } = useSession();

    if (session || (isConnected && hasSigned)) {
        redirect("/home");
    }

    const handleConnect = async () => {
        setIsLoading(true);
        setIsWeb3Auth(true);
        if (!isConnected) open();
    };

    const handleSign = async () => {
        setIsLoading(true);
        setIsWeb3Auth(true);
        if (!isConnected) open();
        try {
            const message = new SiweMessage({
                domain: window.location.host,
                uri: window.location.origin,
                version: "1",
                address: address,
                statement: process.env.NEXT_PUBLIC_SIGNIN_MESSAGE,
                nonce: await getCsrfToken(),
                chainId: polygonMumbai.id,
            });

            const signedMessage = await signMessageAsync({
                message: message?.prepareMessage(),
            });

            setHasSigned(true);

            const response = await signIn("web3", {
                message: JSON.stringify(message),
                signedMessage,
                redirect: true,
                callbackUrl: "/home",
            });

            if (response?.error) {
                throw new Error(response.error);
            }
        } catch (error) {
            console.log("Error Occured", error);
        }
    };

    /*     async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    } */

    return (
        <main className="section-min-height flex h-full scroll-mt-24 flex-col items-center justify-center">
            {(!isConnected || (isConnected && !hasSigned)) && (
                <Tabs defaultValue="signin" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        <Card>
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
                                    <Button className="w-full flex-1" onClick={handleSign}>
                                        Sign Message
                                    </Button>
                                )}
                                {!isWeb3Auth && (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t" />
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                                                <span className="bg-background px-2 text-muted-foreground">Or</span>
                                            </div>
                                        </div>
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
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t" />
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                                                <span className="bg-background px-2 text-muted-foreground">Or</span>
                                            </div>
                                        </div>
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
                                                Sign In with Email
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your signup here. After saving, you will be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current signup</Label>
                                    <Input id="current" type="signup" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New signup</Label>
                                    <Input id="new" type="signup" />
                                </div>
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

export default AuthPage;
