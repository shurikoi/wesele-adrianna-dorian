import TitleWelcomeDescription from "./ui/TitleWelcomeDescription";
import WelcomeContainer from "./WelcomeContainer";

export default function NoAvailablePage() {
    return (
        <WelcomeContainer imageOptionSrc="5">
            <TitleWelcomeDescription>
                <div className="text-center text-4xl md:text-6xl text-textPeach">STRONA NIEDOSTĘPNA</div>
            </TitleWelcomeDescription>
            <TitleWelcomeDescription>
                <div className="text-center text-textPeach">niedługo się pojawi</div>
            </TitleWelcomeDescription>
        </WelcomeContainer>
    );
};
