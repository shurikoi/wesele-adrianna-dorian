export default function Table({ children }: { isSelected?: boolean; children: React.ReactNode; }) {
    return (
        <>
            <div className={`w-full h-full rounded-2xl bg-textPeach/40 backdrop-blur-sm absolute z-10 transition-all duration-200`} />
            {children}
        </>
    );

};
