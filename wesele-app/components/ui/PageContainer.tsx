export default function PageContainer({ children }: { children: React.ReactNode; }) {
    return (
        <div className="p-9 flex px-[17px] justify-center">
            <div className="flex flex-col w-[30rem] gap-4">
                {children}
            </div>
        </div>
    );
};
