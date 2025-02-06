import { ModalQuestionProps } from "@/lib/types";
import FormButtons from "./FormButtons";

export default function ModalQuestion({ question, buttons, userChoice, setUserChoice }: ModalQuestionProps) {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="font-sfPro text-xl text-center">{question}</div>
            <FormButtons
                buttons={buttons}
                userChoice={userChoice}
                setUserChoice={setUserChoice} />
        </div>
    );
};
