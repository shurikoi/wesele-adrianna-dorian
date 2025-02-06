export default function StartWelcomeLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="h-full bg-[url('/ai-img-header.png')] bg-cover bg-center">{children}</div>
    );
};
