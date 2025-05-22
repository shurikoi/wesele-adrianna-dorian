import Chair from "./Chair";
import Table from "./Table";

export default function TableContainer({ chairsQuantity, number, width = 90, height = 500 }: { chairsQuantity: number; number: number; width?: number; height?: number; }) {
    return (
        <div className={`w-[${width}px] h-[${height}px] relative cursor-pointer`}>
            <Table>
                <div className="absolute top-5 left-5 z-20 font-sfPro font-extrabold text-2xl text-textPeach">{number}</div>
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
