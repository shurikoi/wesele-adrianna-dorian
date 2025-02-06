import Header from "../Header";

export default function WelcomeContentLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="p-8 h-full flex flex-col justify-between text-white">
            <Header />
            {children}
        </div>
    );

};
