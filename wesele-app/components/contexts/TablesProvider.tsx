'use client';

import { TablesObject } from "@/lib/types";
import React, { createContext, useContext } from "react";
import Loader from "../ui/Loader";
import { useQuery } from "@tanstack/react-query";
import fetchTables from "@/utils/fetchTables";

type TableContextType = {
    tables: TablesObject[] | null;
};

const TablesContext = createContext<TableContextType>({
    tables: null,
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export default function TablesProvider({ children }: ModalProviderProps) {
    const { data, isLoading } = useQuery({
        queryKey: ['tables'],
        queryFn: fetchTables,
    });
    if (isLoading) return <Loader />;

    return (
        <TablesContext.Provider value={{ tables: data.tables }}>
            {children}
        </TablesContext.Provider>
    );
};

export function useTables() {
    const { tables } = useContext(TablesContext);

    return {
        tables
    };
}
