export default function RegularButton({ label, onClick }: { label: string; onClick?: () => void; }) {
    return (
        <button onClick={onClick} className="w-full rounded-3xl bg-slate-200 py-3 font-sfPro hover:bg-slate-300">{label}</button>
    );
};
