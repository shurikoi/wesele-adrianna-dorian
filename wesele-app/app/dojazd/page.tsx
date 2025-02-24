import NavigateButton from "@/components/ui/buttons/NavigateButton";
import LeftArrow from "@/components/ui/icons/LeftArrow";
import RightArrow from "@/components/ui/icons/RightArrow";
import LeftContainer from "@/components/ui/LeftContainer";
import PageContainer from "@/components/ui/PageContainer";
import Paragraph from "@/components/ui/Paragraph";
import RightContainer from "@/components/ui/RightContainer";
import TitleWelcome from "@/components/ui/TitleWelcome";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Dojazd() {
    return (
        <>
            <WelcomeContainer imageOptionSrc="7">
                <TitleWelcomeLayout title="Dojazd" description="czyli dane do ubera" />
            </WelcomeContainer>
            <PageContainer>
                <LeftContainer>
                    <TitleWelcome>
                        Ślub
                    </TitleWelcome>
                    <Paragraph>Katedra Łódzka</Paragraph>
                    <Paragraph>ulica Piotrkowska 265</Paragraph>
                    <Paragraph>90-457 Łódź</Paragraph>
                    <NavigateButton href="https://maps.app.goo.gl/X29qvtr9RXNjyddcA" />
                </LeftContainer>
                <RightContainer>
                    <RightArrow />
                </RightContainer>
                <RightContainer>
                    <TitleWelcome>Wesele</TitleWelcome>
                    <Paragraph>Diamentowy pałac</Paragraph>
                    <Paragraph>Złotno 96</Paragraph>
                    <Paragraph>91-001 Łódź</Paragraph>
                    <NavigateButton href="https://maps.app.goo.gl/Jx93NhWExV582wDz6" />
                </RightContainer>
                <LeftArrow />
                <LeftContainer>
                    <TitleWelcome>Nocleg</TitleWelcome>
                    <Paragraph>Chcesz się dowiedzieć gdzie śpisz?</Paragraph>
                    <NavigateButton href="/nocleg" title="Sprawdź na stronie Nocleg" />
                </LeftContainer>
            </PageContainer>
        </>
    );
};
