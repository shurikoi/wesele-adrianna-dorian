export default function Chair({ className }: { className?: React.HTMLAttributes<HTMLDivElement>["className"] }) {
    return (
        <div className={`h-[15px] w-[15px] bg-textPeach rounded-xl ${className}`} />
    );
};
