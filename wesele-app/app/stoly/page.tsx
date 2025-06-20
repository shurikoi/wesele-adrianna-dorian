'use client';

import TablesProvider from "@/components/contexts/TablesProvider";
import NoAvailablePage from "@/components/NoAvailablePage";
import Chair from "@/components/ui/Chair";
import PageContainer from "@/components/ui/PageContainer";
import Table from "@/components/ui/Table";
import TableContainer from "@/components/ui/TableContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Stoly() {

    // if (process.env.NODE_ENV === "production" || !isAdmin) return <NoAvailablePage />;
    if (process.env.NODE_ENV === "production") return <NoAvailablePage />;

    return (
        <TablesProvider>
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
                        <TableContainer number={1} chairsQuantity={18} />
                        <TableContainer number={2} chairsQuantity={16} />
                        <TableContainer number={3} chairsQuantity={21} />
                    </div>
                </div>
                {/* <TableInfo selectedTable={selectedTable}></TableInfo> */}
            </PageContainer>
        </TablesProvider>
    );
};