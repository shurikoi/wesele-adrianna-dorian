export default function AgendaItemsContainer({ children }: { children: React.ReactNode; }) {
    return (
        <div className="relative mr-1 flex flex-col gap-7">
            {children}
            <div className="after:absolute after:right-0 after:w-0.5 after:border after:border-dashed after:border-white after:top-[2.5rem] after:bottom-[3.9rem]"></div>
        </div>
    );
};
