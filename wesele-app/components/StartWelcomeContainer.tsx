'use client';

import Image from "next/image";
import { useModal } from "./contexts/ModalProvider";
import ConfirmButton from "./ui/buttons/ConfirmButton";
import TitleWelcome from "./ui/TitleWelcome";
import WelcomeContentLayout from "./ui/WelcomeContentLayout";

export default function StartWelcomeContainer({ children, className }: { children: React.ReactNode, className?: React.ComponentProps<'div'>['className']; }) {
    const { openModal } = useModal();
    return (
        <div className={`h-[80vh] relative ${className}`}>
            <div className="hidden h-full w-full absolute md:flex items-center justify-center">
                <Image src={"/couple-ai.jpeg"} alt="couple" width={450} height={450} className="md:w-[450px]" />
            </div>
            <div className="absolute top-0 right-0 h-full w-full md:hidden">
                <div className="h-full bg-[url('/ai-img-header.png')] bg-cover bg-center"></div>
            </div>
                <WelcomeContentLayout>
                    <TitleWelcome>
                        {children}
                    </TitleWelcome>
                </WelcomeContentLayout>

                <ConfirmButton onClick={() => openModal()} />
        </div>
    );
};
