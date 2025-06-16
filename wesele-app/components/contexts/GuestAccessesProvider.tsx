'use client';

import { GuestAccessObject } from "@/lib/types";
import React, { createContext, useContext } from "react";
import Loader from "../ui/Loader";
import getGuestAccesses from "@/utils/getGuestAccesses";
import { useQuery } from "@tanstack/react-query";

type GuestContextType = {
    guestAccesses: GuestAccessObject[] | null;
}

const GuestAccessesContext = createContext<GuestContextType>({
    guestAccesses: null,
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export default function GuestAccessesProvider({ children }: ModalProviderProps) {
    const { data: guestAccesses, isLoading } = useQuery({
        queryKey: ['guestAccesses'],
        queryFn: getGuestAccesses
    });
    console.log(guestAccesses);
    if (isLoading) return <Loader />;

    return (
        <GuestAccessesContext.Provider value={{ guestAccesses }}>
            {children}
        </GuestAccessesContext.Provider>
    );
};

export function useGuestAccesses() {
    const { guestAccesses } = useContext(GuestAccessesContext);

    return {
        guestAccesses
    };
}
