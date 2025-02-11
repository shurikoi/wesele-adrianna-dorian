import { v4 as uuidv4 } from 'uuid';
import { AgendaData } from './types';

export const agendaData: AgendaData[] = [
    { id: uuidv4(), time: "17:00", name: "CEREMONIA ZAŚLUBIN" },
    { id: uuidv4(), time: "18:00", name: "ZDJĘCIA Z GOŚĆMI" },
    { id: uuidv4(), time: "18:30", name: "TOAST ZA MŁODĄ PARĘ" },
    { id: uuidv4(), time: "19:00", name: "PIERWSZY POSIŁEK" },
];