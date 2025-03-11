'use client';

import { signIn } from "next-auth/react";

export const handleSignIn = async ({ code }: { code: string; }) => {
    const response = await signIn('credentials', { code, redirect: false });
    if (response?.error) throw new Error(response?.error);

    return response;
};