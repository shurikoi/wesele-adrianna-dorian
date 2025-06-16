'use client';

import { useGuestAccess } from "@/components/contexts/GuestAccessProvider";
import NoAvailablePage from "@/components/NoAvailablePage";
import Chair from "@/components/ui/Chair";
import PageContainer from "@/components/ui/PageContainer";
import Table from "@/components/ui/Table";
import TableContainer from "@/components/ui/TableContainer";
import TableInfo from "@/components/ui/TableInfo";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";
import { useState } from "react";

export default function Stoly() {
    const { isAdmin } = useGuestAccess();
    const [selectedTable, setSelectedTable] = useState<string | null>(null);

    if (process.env.NODE_ENV === "production" || !isAdmin) return <NoAvailablePage />;

    return (
        <>
            <WelcomeContainer imageOptionSrc="1">
                <TitleWelcomeLayout title="Stoły" description="sala weselna" />
            </WelcomeContainer>
            <PageContainer>
                <div className="w-full flex flex-col items-center gap-14">
                    <div className="w-[300px] h-[50px] relative cursor-pointer">
                        <Table>
                            <div className="flex w-full h-full absolute top-[-10] gap-2 justify-center">
                                <Chair className="mx-2" />
                                <Chair color="bg-indigo-400" />
                                <Chair color="bg-indigo-400" />
                                <Chair className="mx-2" />
                            </div>
                        </Table>
                    </div>
                    <div className="flex w-full gap-24 justify-center">
                        <TableContainer selectedTable={selectedTable} setSelectedTable={setSelectedTable} number={1} chairsQuantity={20} />
                        <TableContainer selectedTable={selectedTable} setSelectedTable={setSelectedTable} number={2} chairsQuantity={16} />
                        <TableContainer selectedTable={selectedTable} setSelectedTable={setSelectedTable} number={3} chairsQuantity={20} />
                    </div>
                </div>
                <TableInfo selectedTable={selectedTable}></TableInfo>
            </PageContainer>
        </>
    );
};