import { v4 as uuidv4 } from 'uuid';
import { FormButton } from "./types";

interface modalQuestions {
    id: string;
    question: string;
    buttons: FormButton[]
}

export const modalQuestions: modalQuestions[] = [
    {
        id: uuidv4(),
        question: 'Czy będziesz z osobą towarzyszącą?',
        buttons: [{
            title: 'Tak',
            id: 'accept',
            value: 'yes'
        }, {
            title: 'Nie',
            id: 'decline',
            value: 'no'
        }],
    }
]