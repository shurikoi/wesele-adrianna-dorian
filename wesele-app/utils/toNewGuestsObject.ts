import { GuestType, NewGuestObject } from "@/lib/types";

export const toNewGuestsObject = (guests: GuestType[]) => {
    const newGuestsObject = guests.map(({ name, type, table, accompaniment, accommodation }: GuestType) => {
      const newGuestObject: NewGuestObject = {
        name
      };
      if (type) newGuestObject.type = type;
      if (table) newGuestObject.table = table;
      if (accompaniment) newGuestObject.accompaniment = { accompaniment };
      if (accommodation) newGuestObject.accommodation = { needsAccommodation: accommodation };
      return newGuestObject;
    });
    return newGuestsObject
  };