import NoAvailablePage from "@/components/NoAvailablePage";
import Callout from "@/components/ui/Callout";
import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Zdjecia() {
    if (process.env.NODE_ENV === "production") return <NoAvailablePage />;
    return (
        <>
            <WelcomeContainer imageOptionSrc="6">
                <TitleWelcomeLayout title="Zdjęcia" description="przedlądaj i wysyłaj zdjęcia" />
            </WelcomeContainer>
            <PageContainer>
                <div className="flex flex-col gap-16">
                    <Callout style="antiquewhite" className="font-sfPro text-lg">
                        Przeglądaj zdjęcia z naszego wyjątkowego dnia!
                        <button className="p-2 rounded-lg">Przeglądaj</button>
                    </Callout>
                </div>
            </PageContainer>
        </>
    );
};
