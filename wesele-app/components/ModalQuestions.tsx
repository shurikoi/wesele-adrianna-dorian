import { modalQuestions } from "@/lib/modalQuestions";
import ModalQuestion from "./ui/ModalQuestion";
import { StatesRSVP, UserChoices } from "@/lib/types";
import Callout from "./ui/Callout";

interface ModalQuestionProps {
    setCurrentState: React.Dispatch<React.SetStateAction<StatesRSVP>>,
    setSummary: React.Dispatch<React.SetStateAction<UserChoices>>,
    summary: UserChoices;
}

export default function ModalQuestions({ setCurrentState, setSummary, summary }: ModalQuestionProps) {
    const handleSubmit = () => {
        // console.log(summary);
        setCurrentState('summary');
    };
    return (
        <>
            <Callout />
            {modalQuestions.map((question) => <ModalQuestion key={question.id} id={question.id} question={question.question} buttons={question.buttons} setUserChoices={setSummary} userChoices={summary} />)}
            <button onClick={handleSubmit} className="font-sfPro font-bold text-gray-600 ">Potwierdź wybór</button>
        </>
    );
};
