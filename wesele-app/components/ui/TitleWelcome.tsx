export default function TitleWelcome({ children, className }: { children: React.ReactNode, className?: React.ComponentProps<'div'>['className']; }) {
    return (
        <h1 className={`text-6xl font-fellFrench ${className} mb-3`}>{children}</h1>
    );
};
