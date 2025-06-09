export default function Chair({ color = "textPeach", className }: { color?: string; className?: React.HTMLAttributes<HTMLDivElement>["className"] }) {
    return (
        <div className={`h-[15px] w-[15px] bg-${color} rounded-xl ${className}`} />
    );
};
