export default function WelcomeContentLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="p-8 h-full flex flex-col justify-end text-white relative">
            <div>{children}</div>
        </div>
    );

};
