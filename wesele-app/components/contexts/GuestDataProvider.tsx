'use client';

import { mockGuestData } from "@/lib/mockGuestData";
import { MockGuestData } from "@/lib/types";
import React, { createContext, useContext } from "react";

type GuestContextType = {
    guestData: MockGuestData;
};

const GuestDataContext = createContext<GuestContextType>({
    guestData: mockGuestData,
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export default function GuestDataProvider({ children }: ModalProviderProps) {
    const guestData = mockGuestData;
    return (
        <GuestDataContext.Provider value={{ guestData }}>
            {children}
        </GuestDataContext.Provider>
    )
};

export function useGuestData() {
    const guestData = useContext(GuestDataContext);

    return guestData;
}
