import LackAccomodation from "@/components/LackAccomodation";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcome from "@/components/ui/TitleWelcome";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Nocleg() {
    return (
        <>
            <WelcomeContainer imageOptionSrc="2">
                <TitleWelcomeLayout title="Nocleg" description="sprawdź gdzie śpisz" />
            </WelcomeContainer>
            <PageContainer>
                <TitleWelcome>{"Nie ma ;("}</TitleWelcome>
                <LackAccomodation />
            </PageContainer>
        </>
    );
};
