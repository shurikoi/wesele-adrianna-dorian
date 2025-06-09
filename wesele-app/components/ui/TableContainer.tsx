'use client';

import { useState } from "react";
import Chair from "./Chair";
import Table from "./Table";

export default function TableContainer({ chairsQuantity, number}: { chairsQuantity: number; number: number; width?: number; height?: number; }) {
    const [tableSelected, setTableSelected] = useState(false);

    const handleSelectTable = () => {
        setTableSelected(!tableSelected);
    }
    return (
        <div className={`relative w-[90px] h-[550px] cursor-pointer`} onClick={handleSelectTable}>
            <Table isSelected={tableSelected}>
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
