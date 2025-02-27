import { UserChoice, UserChoices } from "@/lib/types";

export default function isChecked(buttonValue: UserChoice, userChoices: UserChoices, id: string): boolean {
    if (!userChoices) return false;
    return userChoices.some(choice => choice.id === id && choice.answer === buttonValue);
};
