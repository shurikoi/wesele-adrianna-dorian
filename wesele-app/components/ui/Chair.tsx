export default function Chair({ color = "bg-textPeach", className }: { color?: string; className?: React.HTMLAttributes<HTMLDivElement>["className"]; }) {
    return (
        <div className={`h-[15px] w-[15px] rounded-xl ${color} ${className}`} />
    );
};
