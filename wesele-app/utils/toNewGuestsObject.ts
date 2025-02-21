import { guest, NewGuestObject } from "@/lib/types";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GuestOptionalFields = guest.partial();
type GuestTypePartial = z.infer<typeof GuestOptionalFields>;

export const toNewGuestsObject = (guests: GuestTypePartial[]) => {
  const newGuestsObject = guests.map(({ name, type, table, accompaniment, accommodation })=> {
    const newGuestObject: Partial<NewGuestObject> = {};
    if (name) newGuestObject.name = name;
    if (type) newGuestObject.type = type;
    if (table) newGuestObject.table = table;
    if (accompaniment) newGuestObject.accompaniment = { accompaniment };
    if (accommodation) newGuestObject.accommodation = { needsAccommodation: accommodation };
    return newGuestObject;
  });
  return newGuestsObject;
};