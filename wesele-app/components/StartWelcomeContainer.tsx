'use client';

import { useModal } from "./contexts/ModalProvider";
import ConfirmButton from "./ui/ConfirmButton";
import StartWelcomeLayout from "./ui/StartWelcomeLayout";
import TitleWelcome from "./ui/TitleWelcome";
import WelcomeContentLayout from "./ui/WelcomeContentLayout";

export default function StartWelcomeContainer({ children }: { children: React.ReactNode; }) {
    const { openModal } = useModal();
    return (
        <div className="h-[80vh] relative">
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
