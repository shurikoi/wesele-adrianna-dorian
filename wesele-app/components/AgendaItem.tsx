export default function AgendaItem({ time, name }: { time: string, name: string; }) {
    return (
        <div className="flex flex-col font-sfPro text-md gap-3">
            <div className="font-bold">{time}</div>
            <div className="h-0.5 w-full bg-white relative">
                <div className="after:absolute after:w-[9px] after:h-[9px] after:right-[-4px] after:top-[-4px] after:bg-white after:rounded-full after:drop-shadow-lg after:drop-shadow-white"></div>
            </div>
            <div className="tracking-widest">{name}</div>
        </div>
    );
};
