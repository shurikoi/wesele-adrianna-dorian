'use client';

import Chair from "./Chair";
import Table from "./Table";
import { useTables } from "../contexts/TablesProvider";

interface TableContainer {
    chairsQuantity: number;
    number: number;
    width?: number;
    height?: number;
}
export default function TableContainer({ chairsQuantity, number }: TableContainer) {

    const { tables } = useTables();

    // Filter all chairs that belong to this table
    const chairsForThisTable = tables?.filter(
        (t) => t.tableNumber === number
    ) ?? [];

    return (
        <div className="relative w-[90px] h-[550px] cursor-pointer">
            <Table>
                <div className="absolute w-full h-full flex justify-center items-center z-20 font-sfPro font-extrabold text-3xl text-textPeach">
                    {number}
                </div>

                {/* Left side chairs (1 to chairsQuantity) */}
                <div className="flex flex-col w-full h-full py-3 absolute left-3 justify-between items-end">
                    {Array.from({ length: chairsQuantity }, (_, i) => {
                        const chairIndex = chairsQuantity + i + 1;
                        const chairData = chairsForThisTable.find(ch => ch.chair === chairIndex);

                        return (
                            <Chair
                                key={`left-${chairIndex}`}
                                chairData={chairData}
                            />
                        );
                    })}
                </div>

                {/* Right side chairs (chairsQuantity+1 to chairsQuantity*2) */}
                <div className="flex flex-col w-full h-full py-3 absolute right-3 justify-between items-start">
                    {Array.from({ length: chairsQuantity }, (_, i) => {
                        const chairIndex = i + 1;
                        const chairData = chairsForThisTable.find(ch => ch.chair === chairIndex);

                        return (
                            <Chair
                                key={`right-${chairIndex}`}
                                chairData={chairData}
                            />
                        );
                    })}
                </div>
            </Table>
        </div>
    );
}