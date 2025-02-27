'use client';

import { handleSignIn } from "@/utils/handleSignIn";
import { redirect } from "next/navigation";
import { use, useEffect } from "react";
import toast from "react-hot-toast";

export default function Page({ params }: { params: Promise<{ code: string; }>; }) {
    const { code } = use(params);
    console.log(code);

    const handleRoute = async () => {
        const response = await handleSignIn({ code });
        if (response?.error) {
            console.log(response.error);
            toast.error("Nieprawidłowy kod dostępu");
            return;
        }
        toast.success("Zalogowano pomyślnie");
    };
    useEffect(() => {
        handleRoute();
        redirect('/');
    })
};
