import { ModalQuestionType, modalQuestions } from "@/lib/modalQuestions";
import ModalQuestion from "./ui/ModalQuestion";
import { StatesRSVP, UserChoices } from "@/lib/types";
import Callout from "./ui/Callout";
import toast from "react-hot-toast";
import { useGuestAccess } from "./contexts/GuestAccessProvider";

interface ModalQuestionProps {
    setCurrentState: React.Dispatch<React.SetStateAction<StatesRSVP>>,
    setSummary: React.Dispatch<React.SetStateAction<UserChoices>>,
    summary: UserChoices;
}

export default function ModalQuestions({ setCurrentState, setSummary, summary }: ModalQuestionProps) {
    const { guestAccess } = useGuestAccess();
    const handleSubmit = () => {
        if (!summary || summary.length !== modalQuestions.length) {
            toast.error('Prosimy o odpowiedź');
            return;
        };
        const response = summary.map(async (question) => {
            const foundQuestion: ModalQuestionType | undefined = modalQuestions.find((q) => q.id === question.id);
            if (!foundQuestion) {
                toast.error('Błąd: nie znaleziono pytania');
                return;
            }
            const responseDb = await fetch('/api/updateGuest', {
                method: 'POST',
                body: JSON.stringify({
                    '_id': guestAccess?.guests[0]._id,
                    [foundQuestion['mongodbKey']]: question.answer === 'yes' ? true : false
                })
            });
            return responseDb;
        });
        console.log(response);
        setCurrentState('summary');
    };
    return (
        <>
            <Callout />
            {modalQuestions.map((question) => <ModalQuestion key={question.id} id={question.id} question={question.question} buttons={question.buttons} setUserChoices={setSummary} userChoices={summary} />)}
            <button onClick={handleSubmit} className="font-sfPro font-bold text-gray-600 border-b-[2.5px] border-blue-500">Potwierdź wybór</button>
        </>
    );
};
