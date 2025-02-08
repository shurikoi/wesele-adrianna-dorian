import Image from "next/image";
import WelcomeContentLayout from "./ui/WelcomeContentLayout";

export default function WelcomeContainer({ children }: { children: React.ReactNode; }) {
    return (
        <div className="h-[80vh] w-full relative bg-backgroundPeach">
            <div className="h-full w-full absolute flex items-center justify-center">
                {/* TODO Image */}
                <Image src="/illustrations/7.svg" alt="hi" width={200} height={200} />
            </div>
            <WelcomeContentLayout>
                {children}
            </WelcomeContentLayout>
        </div>
    );
};
