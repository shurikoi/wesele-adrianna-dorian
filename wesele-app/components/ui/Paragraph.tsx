export default function Paragraph({ children, className }: { children: React.ReactNode, className?: React.ComponentProps<'div'>['className'] }) {
    return <div className={`text-lg/8 font-sfPro px-[3px] ${className}`}>{children}</div>
};
