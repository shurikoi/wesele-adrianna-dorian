'use client';

import AccomodationContent from "@/components/AccomodationContent";
import { useGuestAccess } from "@/components/contexts/GuestAccessProvider";
import LackAccomodation from "@/components/LackAccomodation";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Nocleg() {
    const { isAccommodationNeeded } = useGuestAccess();
    return (
        <>
            <WelcomeContainer imageOptionSrc="2">
                <TitleWelcomeLayout title="Nocleg" description="sprawdź gdzie śpisz" />
            </WelcomeContainer>
            <PageContainer>
                {isAccommodationNeeded ? <AccomodationContent /> : <LackAccomodation />}
            </PageContainer>
        </>
    );
};
