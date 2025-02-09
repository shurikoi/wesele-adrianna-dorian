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
        question: 'Czy będziecie mogli dołączyć do nas na naszym weselu?',
        buttons: [{
            title: 'Tak, z radością',
            id: 'accept',
            value: 'yes'
        }, {
            title: 'Niestety, nie będziemy mogli',
            id: 'decline',
            value: 'no'
        }],
    }
]