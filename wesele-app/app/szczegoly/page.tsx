import FAQ from "@/components/FAQ";
import Menu from "@/components/Menu";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Szczegoly() {
    return (
        <>
            <WelcomeContainer imageOptionSrc="8">
                <TitleWelcomeLayout title="Szczegoły" description="wszystko, co musisz wiedzieć" />
            </WelcomeContainer>
            <PageContainer>
                <Menu />
                <FAQ />
            </PageContainer>
        </>
    );
};
