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

/////__________ ACTUAL TYPES related to mongodb models: __________/////
export const guest = z.object({
    name: z.string(),
    type: z.enum(['adult', 'child']).optional(),
    table: z.string().uuid().optional(), // do i really need .uuid()?
    // accompaniment: z.boolean().optional(),
    // accommodation: z.boolean().optional(),
    // accommodationResponse: z.boolean().optional(),
    _id: z.string().optional(),
});

export type GuestType = z.infer<typeof guest>;

export const guestAccess = z.object({
    code: z.string({ required_error: "Kod jest pusty" }),
    guests: guest.array(),
    type: z.enum(['pair', 'single']),
    accompaniment: z.boolean().optional(),
    accommodation: z.boolean().optional(),
    accommodationResponse: z.boolean().optional(),
    _id: z.string().optional(),
    forGreeting: z.string().optional(),
});

export const signInSchema = guestAccess.pick({ code: true });

export const NewGuestObjectSchema = z.object({
    _id: z.string().optional(),
    name: z.string(),
    type: z.enum(['adult', 'child']).optional(),
    table: z.string().optional(),
    // accompaniment: z.object({
    //     accompaniment: z.boolean(),
    // }).optional(),
    // accommodation: z.object({
    //     needsAccommodation: z.boolean().optional(),
    //     accommodationResponse: z.boolean().optional(),
    // }).optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    __v: z.number().optional(),
});

export type NewGuestObject = z.infer<typeof NewGuestObjectSchema>;

export const GuestAccessSchema = z.object({
    code: z.string({ required_error: "Kod jest pusty" }),
    guests: NewGuestObjectSchema.array(),
    type: z.enum(['pair', 'single']),
    _id: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    __v: z.number().optional(),
    accompaniment: z.object({
        accompaniment: z.boolean(),
    }).optional(),
    accommodation: z.object({
        needsAccommodation: z.boolean().optional(),
        accommodationResponse: z.boolean().optional(),
    }).optional(),
    forGreeting: z.string().optional(),
});

export type GuestAccessObject = z.infer<typeof GuestAccessSchema>;

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