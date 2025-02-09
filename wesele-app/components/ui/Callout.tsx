import Image from "next/image";

export default function Callout() {
    return (
        <div className="rounded-md bg-[#f1f9ff] border border-gray-300 w-full p-5 flex gap-4 flex-col items-center">
            <Image src="/emoji/lion.png" alt="lion" width={25} height={25} className="h-[25px] w-[25px]" />
            <div className="font-sfPro font-[17px] flex flex-col gap-3">
                <div>Uprzejmie prosimy o potwierdzenie obecności telefonicznie:</div>
                <div>Adrianna 790 776 626 <br /> Dorian 578 223 999</div>
            </div>
        </div>
    )
};
