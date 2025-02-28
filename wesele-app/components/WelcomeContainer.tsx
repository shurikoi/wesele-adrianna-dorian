import Image from "next/image";
import WelcomeContentLayout from "./ui/WelcomeContentLayout";
import { WelcomeImageOption } from "@/lib/types";

export default function WelcomeContainer({ children, imageOptionSrc }: { children: React.ReactNode, imageOptionSrc: WelcomeImageOption }) {
    const imageSrc = `/illustrations/${imageOptionSrc}.svg`;
    return (
        <div className="h-[80vh] w-full relative bg-backgroundPeach">
            <div className="h-full w-full absolute flex items-center justify-center">
                <Image src={imageSrc} alt="hi" width={200} height={200} priority={true} />
            </div>
            <WelcomeContentLayout>
                {children}
            </WelcomeContentLayout>
        </div>
    );
};
