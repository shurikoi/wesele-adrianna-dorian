import Paragraph from "./ui/Paragraph";
import TitleWelcome from "./ui/TitleWelcome";

export default function LackAccomodation() {
    return (
        <>
            <TitleWelcome>{"Nie ma ;("}</TitleWelcome>
            <Paragraph className="mt-3">
                Nie uwzględniliśmy dla Ciebie noclegu. Jeśli jednak potrzebujesz noclegu tego dnia,
                zadzwoń do nas.
            </Paragraph>
            <Paragraph className="mt-3">
                Adrianna 790 776 626 <br /> Dorian 578 223 999
            </Paragraph>
        </>
    );
};
