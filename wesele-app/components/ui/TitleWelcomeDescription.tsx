export default function TitleWelcomeDescription({ children, italic = true }: { children: React.ReactNode; italic?: boolean }) {
    return (
        <h2 className={`text-2xl font-fellFrench mb-6 ${italic && 'italic'}`}>{children}</h2>
    );
};
