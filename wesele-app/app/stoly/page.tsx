'use client';

import { useTables } from "@/components/contexts/TablesProvider";
import Chair from "@/components/ui/Chair";
import PageContainer from "@/components/ui/PageContainer";
import Table from "@/components/ui/Table";
import TableContainer from "@/components/ui/TableContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Stoly() {
    const { tables } = useTables();
    return (
        <>
            <WelcomeContainer imageOptionSrc="1">
                <TitleWelcomeLayout title="Stoły" description="sala weselna" />
            </WelcomeContainer>
            <PageContainer className="mt-[-2rem]">
                <div className="w-full h-full overflow-x-auto">
                    <div className="w-[30rem] flex flex-col items-center gap-14">
                        <div className="w-[300px] h-[50px] relative cursor-pointer mt-20">
                            <Table>
                                <div className="flex w-full h-full absolute top-[-10] gap-2 justify-center pl-3">
                                    <Chair className="mx-2" classNameLabel="top-4 -right-1" chairData={tables.find(chair => chair.tableNumber === 0 && chair.chair === 1)} />
                                    <Chair color="bg-indigo-400/40" label="Pan Młody" classNameLabel="-left-8 bottom-5" />
                                    <Chair color="bg-red-400/40" label="Pani Młoda" classNameLabel="bottom-5" />
                                    <Chair className="mx-2" classNameLabel="top-4 -right-2" chairData={tables.find(chair => chair.tableNumber === 0 && chair.chair === 4)} />
                                    <Chair className="mx-2" classNameLabel="top-4 -right-11" chairData={tables.find(chair => chair.tableNumber === 0 && chair.chair === 5)} />
                                </div>
                            </Table>
                        </div>
                        <div className="flex w-full gap-16 pl-20 md:pl-0 md:justify-center">
                            <TableContainer number={1} chairsQuantity={18} />
                            <TableContainer number={2} chairsQuantity={16} />
                            <TableContainer number={3} chairsQuantity={21} />
                        </div>
                    </div>
                </div>
                {/* <TableInfo selectedTable={selectedTable}></TableInfo> */}
            </PageContainer>
        </>
    );
};