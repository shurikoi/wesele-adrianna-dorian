import { DropdownItem } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const FAQData: DropdownItem[] = [
    {
        id: uuidv4(),
        title: "Jak dostać się z Katedry na salę weselną?",
        content: ["Z Katedry do sali weselnej można łatwo dotrzeć w około 30 minut samochodem, więc nie musicie się martwić o trasę. Dla waszej wygody przygotowaliśmy także specjalny autobus, który będzie czekał, by zapewnić wygodny transfer dla wszystkich naszych gości."]
    },
    {
        id: uuidv4(),
        title: "Czy w pobliżu Katedry dostępny jest parking?",
        content: ["Oczywiście, istnieje możliwość parkowania pod samą Katedrą! Zachęcamy do kierowania się w kierunku ul. Skorupki z ul. Wólczańskiej, gdzie znajdziecie wygodne miejsce na parkingu."]
    },
    {
        id: uuidv4(),
        title: "O której godzinie mam przybyć na ceremonię?",
        content: ["Ceremonia rozpoczyna się o godzinie 17:00, dlatego zachęcamy naszych gości do zajęcia dogodnych miejsc 10 minut wcześniej, czyli około godziny 16:50."]
    },
    {
        id: uuidv4(),
        title: "Nadal mam pytania. Jak najlepiej się z Wami skontaktować?",
        content: ["Najlepiej skontaktować się z nami pod numerami telefonu:<br/>"]
    }
];