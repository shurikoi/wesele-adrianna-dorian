'use client';

interface HeaderProps {
    greeting: string;
}

import Image from "next/image";
import GreyButton from "./ui/GreyButton";

export default function Header({ greeting }: HeaderProps) {
    return (
        <header className="h-[80vh] bg-[url('/ai-img-header.png')] bg-cover bg-center  relative">
            <div className="p-8 h-full flex flex-col justify-between text-white">
                <div className="">
                    <div className="text-[16px] flex items-center justify-end gap-1">
                        {greeting}
                        <Image className="-rotate-180 ml-1" src="/vercel.svg" alt="heart" width={11} height={11}></Image>
                    </div>
                    <div className="text-[14px] flex justify-around pt-5">
                        <div className="center">Dojazd</div>
                        <div className="center">Nocleg</div>
                        <div className="center">Szczegóły</div>
                        <div className="center">Stoły</div>
                        <div className="center">Zdjęcia</div>
                    </div>
                </div>
                <h1 className="text-6xl font-fellFrench italic mb-8">Adriana &<br />Dorian</h1>
            </div>
            <GreyButton onClick={() => { }} label="Potwierdź Twoją obecność" />
        </header >
    );
};
