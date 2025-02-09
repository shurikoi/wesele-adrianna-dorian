import { z } from "zod";

export const UserChoiceSchema = z.enum(['yes', 'no']);

export type UserChoice = z.infer<typeof UserChoiceSchema>;

export const UserChoicesSchema = z.object(
    {
        id: z.string().uuid(),
        answer: z.union([z.literal('yes'), z.literal('no')])
    }).array().optional();

export type UserChoices = z.infer<typeof UserChoicesSchema>;

export interface FormButton {
    title: string;
    id: string;
    value: UserChoice;
}

export interface FormButtonsProps {
    id: string;
    buttons: FormButton[];
    userChoices: UserChoices;
    setUserChoices: React.Dispatch<React.SetStateAction<UserChoices>>;
}

export interface ModalQuestionProps extends FormButtonsProps {
    id: string,
    question: string;
}

export const welcomeImagesSchema = z.enum(['1', '2', '3', '4', '5', '6', '7']);

export type WelcomeImageOption = z.infer<typeof welcomeImagesSchema>;

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