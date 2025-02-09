'use client';

import { FormButtonsProps, UserChoiceSchema } from "@/lib/types";
import toast from "react-hot-toast";

export default function FormButtons({ buttons, userChoice, setUserChoice }: FormButtonsProps) {
    const handleChoice = (element: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = UserChoiceSchema.safeParse(element.target.value);
        if (!parsedValue.success) {
            toast.error('Błąd: nieprawidłowa wartość. Spróbuj ponownie.');
            return;
        };
        setUserChoice(parsedValue.data);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-[1.1rem] text-black font-sfPro text-md text-center">
            {buttons.map((button, index) => (
                <label
                    key={index}
                    htmlFor={button.id}
                    className="border-2 rounded-full py-4 w-full has-[:checked]:border-gray-500">
                    {button.title}
                    <input
                        type="radio"
                        id={button.id}
                        value={button.value}
                        className="appearance-none"
                        onChange={handleChoice}
                        checked={userChoice === button.value} />
                </label>
            ))}
        </div>
    );
};
