interface GreyButtonProps {
    onClick: () => void,
    label?: string;
}

export default function ConfirmButton({ onClick, label = "Potwierdź Swoją obecność" }: GreyButtonProps) {
    return (
        <div className="cursor-pointer absolute bottom-[-2rem] w-full flex justify-center p-2 h-[8vh] md:h-[11vh]" onClick={onClick}>
            <div className="w-[80vw] flex justify-center items-center bg-[#E18858] rounded-full md:w-[570px]">
                <span className="font-sfPro font-medium text-white text-lg">{label}</span>
            </div>
        </div>
    );
};