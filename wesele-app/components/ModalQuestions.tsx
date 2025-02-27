import { ModalQuestionType, modalQuestions } from "@/lib/modalQuestions";
import ModalQuestion from "./ui/ModalQuestion";
import { StatesRSVP, UserChoices } from "@/lib/types";
import Callout from "./ui/Callout";
import toast from "react-hot-toast";
import { useGuestAccess } from "./contexts/GuestAccessProvider";
import ContactInfo from "./ui/ContactInfo";

interface ModalQuestionProps {
    setCurrentState: React.Dispatch<React.SetStateAction<StatesRSVP>>,
    setSummary: React.Dispatch<React.SetStateAction<UserChoices>>,
    setIsAnsweredRSVP: React.Dispatch<React.SetStateAction<boolean>>
    summary: UserChoices;
}

export default function ModalQuestions({ setCurrentState, setSummary, summary, setIsAnsweredRSVP }: ModalQuestionProps) {
    const { guestAccess } = useGuestAccess();
    const handleSubmit = () => {
        if (!summary || summary.length !== modalQuestions.length) {
            toast.error('Prosimy o udzielenie odpowiedzi');
            return;
        };
        setCurrentState('summary');
        setIsAnsweredRSVP(true);
        summary.map(async (question) => {
            const foundQuestion: ModalQuestionType | undefined = modalQuestions.find((q) => q.id === question.id);
            if (!foundQuestion) {
                toast.error('Błąd: nie znaleziono pytania');
                return;
            }
            await fetch('/api/updateGuest', {
                method: 'POST',
                body: JSON.stringify({
                    '_id': guestAccess?.guests[0]._id,
                    [foundQuestion['mongodbKey']]: question.answer === 'yes' ? true : false
                })
            });
        });
    };
    return (
        <>
            <Callout>
                <ContactInfo />
            </Callout>
            {modalQuestions.map((question) => <ModalQuestion key={question.id} id={question.id} question={question.question} buttons={question.buttons} setUserChoices={setSummary} userChoices={summary} />)}
            <button onClick={handleSubmit} className="font-sfPro font-bold text-gray-600 border-b-[2.8px] border-blue-500 hover:border-blue-400 transition duration-300">Potwierdź wybór</button>
        </>
    );
};
