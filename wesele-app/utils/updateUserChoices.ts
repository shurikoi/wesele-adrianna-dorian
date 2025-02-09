import { UserChoice, UserChoices } from "@/lib/types";

export default function updateUserChoices(
    prevChoices: UserChoices,
    id: string,
    answer: UserChoice
): NonNullable<UserChoices> {
    if (!prevChoices) return [{ id, answer }];

    const existingChoiceIndex = prevChoices.findIndex(choice => choice.id === id);

    if (existingChoiceIndex !== -1) {
        const newChoices = [...prevChoices];
        newChoices[existingChoiceIndex] = { id, answer };
        return newChoices;
    }

    return [...prevChoices, { id, answer }];
};