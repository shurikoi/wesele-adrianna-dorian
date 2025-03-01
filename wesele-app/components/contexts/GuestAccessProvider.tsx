'use client';

import { GuestAccessObject } from "@/lib/types";
import { useSession } from "next-auth/react";
import React, { createContext, useContext } from "react";
import Loader from "../ui/Loader";

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
    if (status === "loading") return <Loader />;
    const guestAccess = session?.user || null;
    return (
        <GuestAccessContext.Provider value={{ guestAccess }}>
            {children}
        </GuestAccessContext.Provider>
    );
};

export function useGuestAccess() {
    const { guestAccess } = useContext(GuestAccessContext);
    const isAccommodationResponsed = guestAccess?.accommodation?.accommodationResponse || false;
    const isAccommodationNeeded = guestAccess?.accommodation?.needsAccommodation || false;

    const isAccompaniment = guestAccess?.accompaniment?.accompaniment || false;

    const isMultipleGuests = (guestAccess?.guests?.length ?? 0) > 1 || false;

    return { guestAccess, isAccommodationResponsed, isAccommodationNeeded, isMultipleGuests, isAccompaniment };
}
