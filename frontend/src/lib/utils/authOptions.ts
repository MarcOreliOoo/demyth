import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.HOST}/auth/refresh`, {
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
            id: "web3",
            name: "web3",
            credentials: {
                message: { label: "Message", type: "text" },
                signedMessage: { label: "Signed Message", type: "text" }, //signature
            },
            async authorize(credentials, req) {
                console.log("authorize > credentials: ", credentials);

                if (!credentials?.signedMessage || !credentials?.message) {
                    return null;
                }

                const siwe = new SiweMessage(JSON.parse(credentials?.message));
                const result = await siwe.verify({
                    signature: credentials.signedMessage,
                    nonce: await getCsrfToken({ req: { headers: req.headers } }),
                });

                if (!result.success) throw new Error("Invalid Signature");

                if (result.data.statement !== process.env.NEXT_PUBLIC_SIGNIN_MESSAGE)
                    throw new Error("Statement Mismatch");

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
    ],
    //session: { strategy: "jwt" },
    //debug: process.env.NODE_ENV === "development",
    //secret: process.env.NEXTAUTH_SECRET,

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
