import { SignInResponse } from "next-auth/react";
import toast from "react-hot-toast";

const signInToast = async (promise: Promise<SignInResponse | undefined>) => {
    return await toast.promise(promise, {
        loading: "Logowanie...",
        success: "Zalogowano pomyślnie",
        error: "Błąd podczas logowania",
    });
}

export default signInToast