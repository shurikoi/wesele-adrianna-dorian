import LeftArrow from "@/components/ui/icons/LeftArrow";
import RightArrow from "@/components/ui/icons/RightArrow";
import LeftContainer from "@/components/ui/LeftContainer";
import PageContainer from "@/components/ui/PageContainer";
import Paragraph from "@/components/ui/Paragraph";
import RightContainer from "@/components/ui/RightContainer";
import TitleWelcome from "@/components/ui/TitleWelcome";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";
import Link from "next/link";

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
                    <Paragraph>Bazylika archikatedralna <br />św. Stanisława Kostki</Paragraph>
                    <Paragraph>ulica Piotrkowska 265</Paragraph>
                    <Paragraph>Łódź</Paragraph>
                    <a className="underline" href="https://g.co/kgs/SrXN96K">sprawdź na mapie</a>
                </LeftContainer>
                <RightContainer>
                    <RightArrow/>
                </RightContainer>
                <RightContainer>
                    <TitleWelcome>Wesele</TitleWelcome>
                    <Paragraph>Diamentowy pałac</Paragraph>
                    <Paragraph>Złotno 96</Paragraph>
                    <Paragraph>91-001 Łódź</Paragraph>
                </RightContainer>
                <LeftArrow />
                <LeftContainer>
                    <TitleWelcome>Nocleg</TitleWelcome>
                    <Paragraph>Chcesz się dowiedzieć gdzie śpisz?</Paragraph>
                    <Link href="/nocleg" className="underline text-lg mb-5">sprawdź na stronie Nocleg</Link>
                </LeftContainer>
            </PageContainer>
        </>
    );
};
