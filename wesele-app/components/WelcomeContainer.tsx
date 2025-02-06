import WelcomeContentLayout from "./ui/WelcomeContentLayout";

export default function WelcomeContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[80vh]">
            <WelcomeContentLayout>
                {children}
            </WelcomeContentLayout>

        </div>
    );
};
