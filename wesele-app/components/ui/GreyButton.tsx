interface GreyButtonProps {
    onClick: () => void,
    label: string;
}

export default function GreyButton({ onClick, label = "Potwierdź Twoją obecność" }: GreyButtonProps) {
    return (
        <div className="absolute bottom-[-2rem] w-full flex justify-center p-2 h-[8vh] md:h-[11vh]" onClick={onClick}>
            <div className="w-[80vw] flex justify-center items-center bg-[#E0E0E0] rounded-full">
                <span className="font-sfPro font-medium text-[#3F3F3F] text-lg">{label}</span>
            </div>
        </div>
    );
};
