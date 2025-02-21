import { modalQuestions } from "@/lib/modalQuestions";
import { UserChoices } from "@/lib/types";
import Paragraph from "./ui/Paragraph";
import Callout from "./ui/Callout";

export default function SummaryRSVP({ summary }: { summary: UserChoices; }) {
    return (
        <>
            <Callout />
            <Paragraph className="italic text-center">POTWIERDZENIE WYBORU</Paragraph>
            {summary?.map((question) => (
                <div className="flex flex-col gap-2 text-center"  key={question.id}>
                    <div className="font-sfPro text-xl text-center">
                        {modalQuestions.find(element => element.id === question.id)?.question}
                    </div>
                    <Paragraph>{question.answer === 'yes' ? "Tak" : "Nie"}</Paragraph>
                </div>
            ))}
        </>
    );
};
