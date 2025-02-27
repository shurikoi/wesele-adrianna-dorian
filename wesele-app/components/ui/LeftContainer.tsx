export default function LeftContainer({ children }: { children: React.ReactNode; }) {
    return <div className="flex justify-start flex-col text-start gap-2">{children}</div>;
};
