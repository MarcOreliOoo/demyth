import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { controlSignature } from "./siwe";

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/refresh`, {
        method: "POST",
        headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`,
        },
    });
    console.log("nextauth > refreshToken > refreshed");

    const response = await res.json();
    return {
        ...token,
        backendTokens: response,
    };
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: "web3SignIn",
            name: "web3SignIn",
            credentials: {
                message: { label: "Message", type: "text" },
                signedMessage: { label: "Signed Message", type: "text" }, //signature
            },
            async authorize(credentials, req) {
                if (!credentials?.signedMessage || !credentials?.message) {
                    return null;
                }
                const siwe = await controlSignature({ credentials, req });

                const res = await fetch(`${process.env.HOST}/auth/signin`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ address: siwe.address }),
                });

                if (res.status != 200) {
                    console.log("Error: ", await res.text());
                    throw new Error("Error signing in: " + res.status + " " + res.statusText);
                }
                const user = await res.json();
                return user;
            },
        }),
        CredentialsProvider({
            id: "web3SignUp",
            name: "web3SignUp",
            credentials: {
                message: { label: "Message", type: "text" },
                signedMessage: { label: "Signed Message", type: "text" }, //signature
            },
            async authorize(credentials, req) {
                if (!credentials?.signedMessage || !credentials?.message) {
                    return null;
                }

                const siwe = await controlSignature({ credentials, req });

                const res = await fetch(`${process.env.HOST}/auth/signup`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ address: siwe.address }),
                });

                if (res.status != 201) {
                    console.log("Error: ", await res.text());
                    throw new Error("Error signing up: " + res.status + " " + res.statusText);
                }
                const user = await res.json();
                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };
            if (new Date().getTime() < token.backendTokens.expiresIn) return token;
            try {
                return await refreshToken(token);
            } catch (error) {
                console.error("Error refreshing access token", error);
                return { ...token, error: "RefreshAccessTokenError" as const };
            }
        },
        async session({ session, token }: { session: any; token: any }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;
            session.error = token.error;
            return session;
        },
    },
    pages: {
        signIn: "/auth",
        error: "/auth",
    },
};
