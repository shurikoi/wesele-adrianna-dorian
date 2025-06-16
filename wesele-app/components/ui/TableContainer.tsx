'use client';

import { Dispatch, SetStateAction } from "react";
import Chair from "./Chair";
import Table from "./Table";

interface TableContainer {
    chairsQuantity: number;
    number: number;
    selectedTable: string | null;
    setSelectedTable: Dispatch<SetStateAction<string | null>>;
    width?: number;
    height?: number;
}

export default function TableContainer({ chairsQuantity, number, selectedTable, setSelectedTable }: TableContainer) {
    const handleSelectTable = () => {
        setSelectedTable(number.toString());
    };

    const isSelected = selectedTable === number.toString()

    return (
        <div className={`relative w-[90px] h-[550px] cursor-pointer`} onClick={handleSelectTable}>
            <Table isSelected={isSelected}>
                <div className="absolute w-full h-full flex justify-center items-center z-20 font-sfPro font-extrabold text-3xl text-textPeach">{number}</div>
                <div className="flex flex-col w-full h-full py-2 absolute right-2 justify-between">
                    {Array(chairsQuantity).fill(0).map(() => (
                        <Chair key={Math.random()} />
                    ))}
                </div>
                <div className="flex flex-col w-full h-full py-2 absolute left-2 justify-between items-end">
                    {Array(chairsQuantity).fill(0).map(() => (
                        <Chair key={Math.random()} />
                    ))}
                </div>
            </Table>
        </div>
    );
};
