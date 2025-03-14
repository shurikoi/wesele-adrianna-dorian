'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { latinize } from "modern-diacritics";
import { useModal } from "./contexts/ModalProvider";
import GuestModal from "./GuestModal";
import { useGuestAccess } from "./contexts/GuestAccessProvider";

export default function Header({ className }: { className?: React.ComponentProps<'header'>['className'] }) {
    const { openModal, isModalOpen } = useModal();
    const { guestAccess, forGreeting } = useGuestAccess();

    const pages = ['Dojazd', 'Nocleg', 'Szczegóły', 'Stoły', 'Zdjęcia'];

    const pathname = usePathname();
    const currentPage = pathname.split('/')[1];

    return (
        <header className={`${className} h-auto text-white bg-transparent`}>
            <div className="text-[16px] flex items-center justify-between">
                <div className="font-fellFrench italic text-3xl"><Link href={'/'}>&</Link></div>
                <div className="flex relative cursor-pointer" onClick={() => openModal("Guest")}>
                    {guestAccess ? `Cześć ${forGreeting}!` : 'Zaloguj się'}
                    <Image className="-rotate-180 ml-1" src="/vercel.svg" alt="arrow" width={11} height={11} priority={true}></Image>             
                </div>
            </div>
            <div className="text-[14px] flex justify-around pt-2">
                {pages.map((page, index) => (
                    <Link key={index} className="py-3 px-2 hover:text-white/70 transition-colors duration-150" href={`/${latinize(page, { lowerCase: true })}`}>
                        <span className={currentPage === latinize(page, { lowerCase: true }) ? 'font-bold' : ''}>{page}</span>
                    </Link>
                ))}
            </div>
            {isModalOpen === "Guest"  && <GuestModal />}
        </header>
    );
};
