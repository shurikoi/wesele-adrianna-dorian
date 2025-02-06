'use client';

import Image from "next/image";
import { useGuestData } from "./contexts/GuestDataProvider";

export default function Header() {
    const { guestData } = useGuestData();
    return (
        <header className="h-full text-white bg-transparent">
                <div className="text-[16px] flex items-center justify-end gap-1">
                    {guestData.greeting}
                    <Image className="-rotate-180 ml-1" src="/vercel.svg" alt="heart" width={11} height={11}></Image>
                </div>
                <div className="text-[14px] flex justify-around pt-5">
                    <div className="center">Dojazd</div>
                    <div className="center">Nocleg</div>
                    <div className="center">Szczegóły</div>
                    <div className="center">Stoły</div>
                    <div className="center">Zdjęcia</div>
                </div>
        </header>
    );
};
