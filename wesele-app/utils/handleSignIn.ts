'use client';

import { signIn } from "next-auth/react";

export const handleSignIn = async ({ code }: { code: string }) => {
    const response = await signIn('credentials', { code, redirect: false });
    return response;
};