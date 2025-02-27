import TitleWelcome from "./TitleWelcome";
import TitleWelcomeDescription from "./TitleWelcomeDescription";

export default function TitleWelcomeLayout({ title, description }: { title: string, description: string; }) {
    return (
        <>
            <TitleWelcome>
                <div className="text-center text-textPeach">{title.toUpperCase()}</div>
            </TitleWelcome>
            <TitleWelcomeDescription>
                <div className="text-center text-textPeach">{description}</div>
            </TitleWelcomeDescription>
        </>
    );
};
