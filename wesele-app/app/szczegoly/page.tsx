'use client';

import Agenda from "@/components/Agenda";
import FAQ from "@/components/FAQ";
import Menu from "@/components/Menu";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Szczegoly() {
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
