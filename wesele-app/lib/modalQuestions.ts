import { v4 as uuidv4 } from 'uuid';
import { FormButton } from "./types";

export interface ModalQuestionType {
    id: string;
    question: string;
    mongodbKey: 'accompaniment' | 'accomodation';
    buttons: FormButton[]
}

export const modalQuestions: ModalQuestionType[] = [
    {
        id: uuidv4(),
        question: 'Czy będziesz z osobą towarzyszącą?',
        mongodbKey: 'accompaniment',
        buttons: [{
            title: 'Tak',
            id: 'accept',
            value: 'yes'
        }, {
            title: 'Nie',
            id: 'decline',
            value: 'no'
        }],
    },
]