import { v4 as uuidv4 } from 'uuid';
import { AgendaData } from './types';

export const agendaData: AgendaData[] = [
    { id: uuidv4(), time: "17:00", name: "CEREMONIA ZAŚLUBIN" },
    // { id: uuidv4(), time: "18:00", name: "ZDJĘCIA Z GOŚĆMI PRZED KOŚCIOŁEM" },
    { id: uuidv4(), time: "19:00", name: "POWITANIE PRZEZ RODZICÓW" },
    { id: uuidv4(), time: "19:00", name: "TOAST ZA MŁODĄ PARĘ" },
    { id: uuidv4(), time: "19:15", name: "ŻYCZENIA" },
    { id: uuidv4(), time: "19:30", name: "PIERWSZY POSIŁEK" },
    { id: uuidv4(), time: "20:15", name: "PIERWSZY TANIEC" },
    { id: uuidv4(), time: "21:00", name: "DESER LODOWY" },
    { id: uuidv4(), time: "22:00", name: "DRUGI POSIŁEK" },
    { id: uuidv4(), time: "22:30", name: "NIESPODZIANKA PROSIMY NIE UCIEKAĆ Z SALI" },
    { id: uuidv4(), time: "23:30", name: "TORT" },
    { id: uuidv4(), time: "00:00", name: "OCZEPINY" },
    { id: uuidv4(), time: "01:00", name: "TRZECI POSIŁEK" },
    { id: uuidv4(), time: "02:30", name: "CZWARTY POSIŁEK" },
    { id: uuidv4(), time: "03:30", name: "PIĄTY POSIŁEK" },
];