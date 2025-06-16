'use client';

import Agenda from "@/components/Agenda";
import FAQ from "@/components/FAQ";
import Menu from "@/components/Menu";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";
import NoAvailablePage from "@/components/NoAvailablePage";
import { useGuestAccess } from "@/components/contexts/GuestAccessProvider";

export default function Szczegoly() {
    const { isAdmin } = useGuestAccess();
    if (!isAdmin) return <NoAvailablePage />;
    return (
        <>
            <WelcomeContainer imageOptionSrc="8">
                <TitleWelcomeLayout title="Szczegóły" description="wszystko, co musisz wiedzieć" />
            </WelcomeContainer>
            <PageContainer>
                <div className="flex flex-col gap-16">
                    <Agenda />
                    <Menu />
                    <FAQ />
                </div>
            </PageContainer>
        </>
    );
};
