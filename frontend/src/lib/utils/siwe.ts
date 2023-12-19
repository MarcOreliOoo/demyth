import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";
import { RequestInternal } from "next-auth";
import { SignMessageArgs } from "@wagmi/core";

type TSignature = {
    credentials: {
        message: string;
        signedMessage: string;
    };
    req: Pick<RequestInternal, "body" | "query" | "headers" | "method">;
};
export async function controlSignature({ credentials, req }: TSignature): Promise<SiweMessage> {
    const siwe = new SiweMessage(JSON.parse(credentials?.message));
    const result = await siwe.verify({
        signature: credentials.signedMessage,
        nonce: await getCsrfToken({ req: { headers: req.headers } }),
    });

    if (!result.success) throw new Error("Invalid Signature");
    if (result.data.statement !== process.env.NEXT_PUBLIC_SIGNIN_MESSAGE) throw new Error("Statement Mismatch");
    return siwe;
}

export type TReturnMessages = {
    message: SiweMessage;
    signedMessage: `0x${string}`;
};
type TGetSiweMessages = {
    address: `0x${string}` | undefined;
    id: number;
    signMessageAsync: (args?: SignMessageArgs | undefined) => Promise<`0x${string}`>;
};
export async function getSiweMessages({ address, id, signMessageAsync }: TGetSiweMessages): Promise<TReturnMessages> {
    const message = new SiweMessage({
        domain: window.location.host,
        uri: window.location.origin,
        version: "1",
        address: address,
        statement: process.env.NEXT_PUBLIC_SIGNIN_MESSAGE,
        nonce: await getCsrfToken(),
        chainId: id,
    });

    const signedMessage = await signMessageAsync({
        message: message?.prepareMessage(),
    });

    return { message, signedMessage };
}
