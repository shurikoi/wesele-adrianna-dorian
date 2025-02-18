'use client';

import Image from "next/image";
import { useGuestData } from "./contexts/GuestDataProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { latinize } from "modern-diacritics";
import getSplitedNames from "@/utils/getSplitedNames";
import { useModal } from "./contexts/ModalProvider";
import GuestModal from "./GuestModal";

export default function Header() {
    const { guestData } = useGuestData();
    const { openModal, isModalOpen } = useModal();

    const pages = ['Dojazd', 'Nocleg', 'Szczegóły', 'Stoły', 'Zdjęcia'];

    const pathname = usePathname();
    const currentPage = pathname.split('/')[1];

    return (
        <header className="h-full text-white bg-transparent">
            <div className="text-[16px] flex items-center justify-between">
                <div className="font-fellFrench italic text-3xl"><Link href={'/'}>&</Link></div>
                <div className="flex relative cursor-pointer" onClick={() => openModal("Guest")}>
                    Cześć {getSplitedNames(guestData.guests)}
                    <Image className="-rotate-180 ml-1" src="/vercel.svg" alt="arrow" width={11} height={11}></Image>             
                </div>
            </div>
            <div className="text-[14px] flex justify-around pt-2">
                {pages.map((page, index) => (
                    <Link key={index} className="p-3" href={`/${latinize(page, { lowerCase: true })}`}>
                        <span className={currentPage === latinize(page, { lowerCase: true }) ? 'font-bold' : ''}>{page}</span>
                    </Link>
                ))}
            </div>
            {isModalOpen === "Guest"  && <GuestModal />}
        </header>
    );
};
