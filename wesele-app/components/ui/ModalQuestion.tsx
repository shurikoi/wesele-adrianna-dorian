import { ModalQuestionProps } from "@/lib/types";
import FormButtons from "./buttons/FormButtons";

export default function ModalQuestion({ question, id, buttons, userChoices, setUserChoices }: ModalQuestionProps) {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="font-sfPro text-xl text-center">{question}</div>
            <FormButtons
                id={id}
                buttons={buttons}
                userChoices={userChoices}
                setUserChoices={setUserChoices} />
        </div>
    );
};
