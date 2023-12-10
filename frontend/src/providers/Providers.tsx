"use client";
import React from "react";
import { Web3Modal } from "../contexts/Web3Modal";
import AuthContext from "../contexts/AuthContext";

/**
 * Global providers
 */
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Web3Modal>
            <AuthContext>{children}</AuthContext>
        </Web3Modal>
    );
};

export default Providers;
