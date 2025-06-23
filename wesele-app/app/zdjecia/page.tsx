"use client";

import { useGuestAccess } from '@/components/contexts/GuestAccessProvider';
import { useModal } from '@/components/contexts/ModalProvider';
import Callout from "@/components/ui/Callout";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";
import { useEffect } from 'react';

export default function Zdjecia() {
    const { guestAccess } = useGuestAccess();
    const { openModal } = useModal();
    useEffect(() => {
        if (!guestAccess) openModal("Guest");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <WelcomeContainer imageOptionSrc="6">
                <TitleWelcomeLayout title="Zdjęcia" description="przedlądaj i wysyłaj zdjęcia" />
            </WelcomeContainer>
            <PageContainer>
                {guestAccess ? (
                    <div className="flex flex-col gap-16">
                        <Callout style="antiquewhite" className="font-sfPro text-lg">
                            Publikuj oraz przeglądaj zdjęcia z naszego wyjątkowego dnia!
                            <button className="px-7 py-2 rounded-full bg-orange-200 border border-orange-500" onClick={() => window.open('https://drive.google.com/drive/folders/1PH8aaGxKacJg_84zEpwFubwKdUo0JPlQ?usp=sharing', '_blank')}>Przejdź</button>
                        </Callout>
                    </div>
                ) : (
                    <Callout style="antiquewhite" className="font-sfPro text-lg">
                        Nie masz dostępu do tej strony
                    </Callout>
                )}
            </PageContainer>
        </>
    );
};
