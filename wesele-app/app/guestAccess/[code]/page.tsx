'use client';

import { handleSignIn } from "@/utils/handleSignIn";
import signInToast from "@/utils/signInToast";
import { redirect } from "next/navigation";
import { use, useEffect } from "react";

export default function Page({ params }: { params: Promise<{ code: string; }>; }) {
    const { code } = use(params);
    const decodedCode = decodeURI(code);

    const handleRoute = async () => {
        const signingIn = handleSignIn({ code: decodedCode });
        signInToast(signingIn);
    };
    useEffect(() => {
        handleRoute();
        redirect('/');
    });
};
