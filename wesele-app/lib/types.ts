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

// _______________________________________________________ IN PROGRESS _______________________________________________________
interface Guest {
    id: string;
    name: string;
    type: string;
    rsvp: boolean;
    rsvpTime: string;
    table: number;
    diet: string;
    accomodation: string;
    order: number;
    createdAt: string;
}

export interface MockGuestData {
    id: string;
    code: string;
    content: string;
    type: string;
    order: number;
    greeting: string;
    song: string | null;
    createdAt: string;
    guests: Guest[];
}