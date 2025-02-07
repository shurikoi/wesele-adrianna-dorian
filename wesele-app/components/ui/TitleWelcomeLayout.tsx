import TitleWelcomeContainer from "./TitleWelcome";
import TitleWelcomeDescription from "./TitleWelcomeDescription";

export default function TitleWelcomeLayout({ title, description }: { title: string, description: string; }) {
    return (
        <>
            <TitleWelcomeContainer>
                <div className="text-center text-textPeach">{title.toUpperCase()}</div>
            </TitleWelcomeContainer>
            <TitleWelcomeDescription>
                <div className="text-center text-textPeach">{description}</div>
            </TitleWelcomeDescription>
        </>
    );
};
