export default function PageContainer({ children }: { children: React.ReactNode; }) {
    return (
        <div className="p-9 flex grow-2 px-[17px] justify-center">
            <div className="flex flex-col grow-2 w-[30rem] gap-2">
                {children}
            </div>
        </div>
    );
};
