'use client';

import { useModal } from "./contexts/ModalProvider";
import ConfirmButton from "./ui/buttons/ConfirmButton";
import StartWelcomeLayout from "./ui/StartWelcomeLayout";
import TitleWelcome from "./ui/TitleWelcome";
import WelcomeContentLayout from "./ui/WelcomeContentLayout";

export default function StartWelcomeContainer({ children, className }: { children: React.ReactNode, className?: React.ComponentProps<'div'>['className']; }) {
    const { openModal } = useModal();
    return (
        <div className={`h-[80vh] relative ${className}`}>
            <StartWelcomeLayout>
                <WelcomeContentLayout>
                    <TitleWelcome>
                        {children}
                    </TitleWelcome>
                </WelcomeContentLayout>
                <ConfirmButton onClick={() => openModal()} />
            </StartWelcomeLayout>
        </div>
    );
};
