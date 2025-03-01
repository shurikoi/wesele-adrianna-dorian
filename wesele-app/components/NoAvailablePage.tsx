import TitleWelcomeLayout from "./ui/TitleWelcomeLayout";
import WelcomeContainer from "./WelcomeContainer";

export default function NoAvailablePage() {
    return (
        <WelcomeContainer imageOptionSrc="4">
            <TitleWelcomeLayout title="Strona niedostępna" description="niedługo się pojawi" />
        </WelcomeContainer>
    );
};
