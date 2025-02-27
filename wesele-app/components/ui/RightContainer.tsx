export default function RightContainer({ children }: { children: React.ReactNode; }) {
    return <div className="flex justify-end flex-col items-end text-end gap-2">{children}</div>;
};
