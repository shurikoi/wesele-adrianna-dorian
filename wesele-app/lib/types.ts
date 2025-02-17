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

export const welcomeImagesSchema = z.enum(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

export type WelcomeImageOption = z.infer<typeof welcomeImagesSchema>;

export type StatesRSVP = 'questions' | 'summary';

// _______________________________________________________ IN PROGRESS _______________________________________________________

interface RSVP {
    id: string;
    rsvp: boolean;
    rsvpTime?: string;
    createdAt: number;
    updatedAt: number;
}

interface Accomodation {
    id: string;
    accomodation: boolean;
    accomodationResponse?: boolean;
    createdAt: number;
    updatedAt: number;
}

interface Table {
    id: string;
    number: number;
    capacity: number;
}

interface Guest {
    id: string;                // Unique guest ID
    name: string;              // Guest's name
    type: 'adult' | 'child';   // Type of guest (adult or child)
    table?: Table;           // Reference to the Table collection
    rsvp?: RSVP;            // Reference to the RSVP information
    accomodation: Accomodation;    // Reference to the accommodation info
    createdAt: number;
    updatedAt: number;
}

export interface MockGuestData {
    id: string;
    code: string;
    // type: 'pair' | 'single';
    guests: Guest[];
    createdAt: number;
    updatedAt: number;
}
/////
export const guest = z.object({
    name: z.string(),
    type: z.enum(['adult', 'child']).optional(),
    table: z.string().uuid().optional(), // do i really need .uuid()?
    accompaniment: z.boolean().optional(),
    accommodation: z.boolean().optional(),
});

export type GuestType = z.infer<typeof guest>;

export const guestAccess = z.object({
    code: z.string().length(5),
    guests: guest.array()
});

//  ______________________________________________________________________

export interface DropDownContainer {
    title: string;
    content: string[];
}

export type ContentDropdownItem = DropDownContainer["content"];

export interface DropdownItem extends DropDownContainer {
    id: string;
}

export interface AgendaData {
    id: string,
    time: string,
    name: string,
}