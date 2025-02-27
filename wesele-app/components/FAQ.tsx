import { FAQData } from "@/lib/FAQData";
import DropdownContainer from "./DropdownContainer";
import TitleWelcome from "./ui/TitleWelcome";

export default function FAQ() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-2">
                <TitleWelcome>FAQ</TitleWelcome>
                <div className="font-fellFrench text-2xl">Często zadawane pytania</div>
            </div>
            {FAQData.map((element) => <DropdownContainer key={element.id} content={element.content} title={element.title} />)}
        </div>
    );
};
