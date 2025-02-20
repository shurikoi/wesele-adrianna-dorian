'use client';

import { GuestAccessObject } from "@/lib/types";
import { useSession } from "next-auth/react";
import React, { createContext, useContext } from "react";

type GuestContextType = {
    guestAccess: GuestAccessObject | null;
};

const GuestAccessContext = createContext<GuestContextType>({
    guestAccess: null,
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export default function GuestAccessProvider({ children }: ModalProviderProps) {
    const { data: session, status } = useSession();
    if (status === "loading") return null; // TODO: Add loading spinner
    const guestAccess = session?.user || null;
    return (
        <GuestAccessContext.Provider value={{ guestAccess }}>
            {children}
        </GuestAccessContext.Provider>
    );
};

export function useGuestAccess() {
    const guestAccess = useContext(GuestAccessContext);

    return guestAccess;
}
