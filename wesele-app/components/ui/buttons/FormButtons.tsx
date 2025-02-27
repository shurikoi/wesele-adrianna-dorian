'use client';

import { FormButtonsProps, UserChoiceSchema } from "@/lib/types";
import isChecked from "@/utils/isChecked";
import updateUserChoices from "@/utils/updateUserChoices";
import toast from "react-hot-toast";

export default function FormButtons({ buttons, id, userChoices, setUserChoices }: FormButtonsProps) {
    const handleChoice = (element: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = UserChoiceSchema.safeParse(element.target.value);
        if (!parsedValue.success) {
            toast.error('Błąd: nieprawidłowa wartość. Spróbuj ponownie.');
            return;
        }

        setUserChoices((prevChoices) => {
            return updateUserChoices(prevChoices, id, parsedValue.data);
        });
    };

    return (
        <div className="flex justify-center items-center gap-[0.5rem] text-black font-sfPro text-md text-center">
            {buttons.map((button, index) => (
                <label
                    key={index}
                    htmlFor={button.id}
                    className="border-2 rounded-full cursor-pointer py-4 w-full has-[:checked]:border-gray-500">
                    {button.title}
                    <input
                        type="radio"
                        id={button.id}
                        value={button.value}
                        className="appearance-none"
                        onChange={handleChoice}
                        checked={isChecked(button.value, userChoices, id)} />
                </label>
            ))}
        </div>
    );
};
