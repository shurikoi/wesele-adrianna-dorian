import Image from "next/image";

interface CalloutProps {
    style?: 'white' | 'antiquewhite'
    className?: React.ComponentProps<'div'>['className']
    children?: React.ReactNode
}

export default function Callout({ style, className, children }: CalloutProps) {
    const styles = {
        white: 'bg-[#f1f9ff] border-gray-300',
        antiquewhite: 'bg-[#FAEBD7]/40 border-[#83624d] backdrop-blur-xs',
    }
    return (
        <div className={`${className} ${styles[style || 'white']} text-center rounded-3xl border w-full p-7 flex gap-4 flex-col items-center text-black`}>
            <Image src="/emoji/lion.png" alt="lion" width={25} height={25} className="h-[25px] w-[25px]" />
            {children}
        </div>
    )
};
