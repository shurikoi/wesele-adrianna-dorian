import { z } from "zod";

export const UserChoiceSchema = z.enum(['yes', 'no']);

export type UserChoice = z.infer<typeof UserChoiceSchema>;

export interface FormButton {
    title: string;
    id: string;
    value: UserChoice;
}

export interface FormButtonsProps {
    buttons: FormButton[];
    userChoice: UserChoice | undefined;
    setUserChoice: (value: UserChoice) => void;
}

export interface ModalQuestionProps extends FormButtonsProps {
    question: string;
}