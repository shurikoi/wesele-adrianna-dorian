'use client';

import Image from "next/image";
import { useGuestData } from "./contexts/GuestDataProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const { guestData } = useGuestData();

    const pages = ['Dojazd', 'Nocleg', 'Szczegóły', 'Stoły', 'Zdjęcia'];

    const pathname = usePathname();
    const currentPage = pathname.split('/')[1];

    return (
        <header className="h-full text-white bg-transparent">
            <div className="text-[16px] flex items-center justify-between">
                <div className="font-fellFrench italic text-3xl"><Link href={'/'}>&</Link></div>
                <div className="flex">
                    {guestData.greeting}
                    <Image className="-rotate-180 ml-1" src="/vercel.svg" alt="heart" width={11} height={11}></Image>
                </div>
            </div>
            <div className="text-[14px] flex justify-around pt-5">
                {pages.map((page, index) => (
                    <Link key={index} href={`/${page.toLowerCase()}`}>
                        <span className={currentPage === page.toLowerCase() ? 'font-bold' : ''}>{page}</span>
                    </Link>
                ))}
            </div>
        </header>
    );
};
