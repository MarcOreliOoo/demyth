import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: "web3",
            name: "web3",
            credentials: {
                message: { label: "Message", type: "text" },
                signedMessage: { label: "Signed Message", type: "text" }, // aka signature
            },
            async authorize(credentials, req) {
                console.log("\n\nHIT", credentials);

                if (!credentials?.signedMessage || !credentials?.message) {
                    return null;
                }

                try {
                    const siwe = new SiweMessage(JSON.parse(credentials?.message));
                    const result = await siwe.verify({
                        signature: credentials.signedMessage,
                        nonce: await getCsrfToken({ req: { headers: req.headers } }),
                    });

                    if (!result.success) throw new Error("Invalid Signature");

                    if (result.data.statement !== process.env.NEXT_PUBLIC_SIGNIN_MESSAGE)
                        throw new Error("Statement Mismatch");

                    console.log("Returning");

                    return {
                        id: siwe.address,
                    };
                } catch (error) {
                    console.log(error);
                    return null;
                }
            },
        }),
    ],
    session: { strategy: "jwt" },

    debug: process.env.NODE_ENV === "development",

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async session({ session, token }: { session: any; token: any }) {
            session.user.address = token.sub;
            session.user.token = token;
            console.log("token : ", token);
            console.log("session : ", session);
            return session;
        },
    },
    pages: {
        signIn: "/auth",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
