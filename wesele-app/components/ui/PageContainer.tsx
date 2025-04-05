export default function PageContainer({ children, className }: { children: React.ReactNode; className?: React.ComponentProps<'div'>['className']; }) {
    return (
        <div className={`p-9 flex px-[17px] justify-center ${className}`}>
            <div className="flex flex-col w-[30rem] gap-3">
                {children}
            </div>
        </div>
    );
};
