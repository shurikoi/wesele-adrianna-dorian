interface ModalInputProps {
    handleSubmit: () => void,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    placeholder: string,
    className?: React.ComponentProps<'div'>['className'],
    type?: string,
    colorScheme?: "default" | "red";
    isFilled?: boolean,
}

export default function ModalInput({
    className = "",
    placeholder,
    value,
    setValue,
    isFilled = true,
    handleSubmit,
    type = "text",
    colorScheme = "default"
}: ModalInputProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key == "Enter" && isFilled) handleSubmit();
    };

    const colorSchemes = {
        "default": 'border-[#c8c8c8] focus:border-[#1f1f1f]',
        "red": 'border-[#ffacac] focus:border-[##ff0000]',
    };

    return (
        <input
            className={`w-full outline-none font-sfPro text-lg text-center p-4 box-border border-[2px] rounded-full transition-border duration-500 ${colorSchemes[colorScheme]} ${className}`}
            type={type}
            placeholder={placeholder}
            autoCapitalize="off"
            autoComplete="false"
            value={value}
            onChange={(e) => {
                setValue(e.target.value.trim());
            }}
            onKeyDown={handleKeyDown}
        />
    );
}