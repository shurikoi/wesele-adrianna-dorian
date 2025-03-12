'use client';

import { handleSignIn } from "@/utils/handleSignIn";
import signInToast from "@/utils/signInToast";
import { redirect } from "next/navigation";
import { use, useEffect } from "react";

export default function Page({ params }: { params: Promise<{ code: string; }>; }) {
    const { code } = use(params);

    const handleRoute = async () => {
        const signingIn = handleSignIn({ code });
        signInToast(signingIn);
    };
    useEffect(() => {
        handleRoute();
        redirect('/');
    });
};
