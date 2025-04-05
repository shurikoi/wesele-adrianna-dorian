interface SortButtonProps {
    isActive: boolean;
    onClick: () => void;
    label: string;
}

const SortButton = ({ isActive, onClick, label }: SortButtonProps) => {
    return (
        <button
            className={`rounded-lg px-4 py-2 transition-colors ${
                isActive
                    ? 'bg-[#A68B6F] text-white font-bold'
                    : 'bg-[#D9C2A9] text-white hover:bg-[#C7A78B]'
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default SortButton;