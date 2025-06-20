import { agendaData } from "@/lib/agendaData";
import TitleWelcome from "./ui/TitleWelcome";
import AgendaItemsContainer from "./ui/AgendaItemsContainer";
import AgendaItem from "./AgendaItem";
import Callout from "./ui/Callout";

export default function Agenda() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-2">
                <TitleWelcome>Agenda</TitleWelcome>
                <div className="font-fellFrench text-2xl">Sprawdź co cię czeka</div>
                <Callout className="mt-5" style="antiquewhite">Godziny mogą ulec przesunięciu</Callout>
            </div>
            <AgendaItemsContainer>
                {agendaData.map(item => <AgendaItem key={item.id} time={item.time} name={item.name} />)}
            </AgendaItemsContainer>
        </div>
    );
};
