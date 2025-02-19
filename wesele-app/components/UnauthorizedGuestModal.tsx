'use client';

import { handleSignIn } from "@/utils/handleSignIn";
import { useState } from "react";
import Paragraph from "./ui/Paragraph";
import ModalInput from "./ui/ModalInput";
import RegularButton from "./ui/buttons/RegularButton";
import { signInSchema } from "@/lib/types";
import toast from "react-hot-toast";

export const UnauthorizedGuestModal = () => {
    const [code, setCode] = useState("");
    const handleSignInForm = async () => {
        const codeParsed = signInSchema.safeParse({ code })
        if (!codeParsed.success) {
            toast.error(codeParsed.error.errors[0].message);
            return;
        };
        const response = await handleSignIn({ code: codeParsed.data.code });
        if (response?.error) {
            toast.error("Nieprawidłowy kod dostępu");
            return;
        }
        console.log(response);
    };
    return (
        <div className="flex flex-col gap-5 w-full items-center">
            <div className="flex flex-col gap-2 w-full items-center">
                <Paragraph className="font-bold">LOGOWANIE</Paragraph>
                <div className="font-sfPro italic text-center">Zeskanuj kod QR, lub wpisz kod z zaproszenia!</div>
            </div>
            <ModalInput placeholder="Enter code" value={code} setValue={setCode} handleSubmit={handleSignInForm} />
            <RegularButton label="Sign in" onClick={handleSignInForm} />
        </div>
    );
};