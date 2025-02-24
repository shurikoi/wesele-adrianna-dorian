'use client';

import AccomodationContent from "@/components/AccomodationContent";
import { useGuestAccess } from "@/components/contexts/GuestAccessProvider";
import LackAccomodation from "@/components/LackAccomodation";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Nocleg() {
    const { guestAccess } = useGuestAccess();
    const accommodation = guestAccess?.guests[0].accommodation?.needsAccommodation;
    return (
        <>
            <WelcomeContainer imageOptionSrc="2">
                <TitleWelcomeLayout title="Nocleg" description="sprawdź gdzie śpisz" />
            </WelcomeContainer>
            <PageContainer>
                {accommodation ? <AccomodationContent /> : <LackAccomodation />}
            </PageContainer>
        </>
    );
};
