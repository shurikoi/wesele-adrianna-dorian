// import { guest, NewGuestObject } from "@/lib/types";
// import { z } from "zod";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const GuestOptionalFields = guest.partial();
// type GuestTypePartial = z.infer<typeof GuestOptionalFields>;

// export const toNewGuestsObject = (guests: GuestTypePartial[]) => {
//   const newGuestsObject = guests.map(({ name, type, table, accompaniment, accommodation })=> {
//     const newGuestObject: Partial<NewGuestObject> = {};
//     if (name) newGuestObject.name = name;
//     if (type) newGuestObject.type = type;
//     if (table) newGuestObject.table = table;
//     if (accompaniment) newGuestObject.accompaniment = { accompaniment };
//     if (accommodation) newGuestObject.accommodation = { needsAccommodation: accommodation };
//     return newGuestObject;
//   });
//   return newGuestsObject;
// };

import { guest, NewGuestObject } from "@/lib/types";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GuestOptionalFields = guest.partial();
type GuestTypePartial = z.infer<typeof GuestOptionalFields>;

export const toNewGuestsObject = (input: GuestTypePartial | GuestTypePartial[]): Partial<NewGuestObject> | Partial<NewGuestObject>[] => {
  const transform = ({ name, type, table, accompaniment, accommodation, _id }: GuestTypePartial): Partial<NewGuestObject> => {
    const newGuestObject: Partial<NewGuestObject> = {};
    if (_id) newGuestObject._id = _id;
    if (name) newGuestObject.name = name;
    if (type) newGuestObject.type = type;
    if (table) newGuestObject.table = table;
    if (accompaniment !== undefined) newGuestObject.accompaniment = { accompaniment };
    if (accommodation !== undefined) newGuestObject.accommodation = { needsAccommodation: accommodation };
    return newGuestObject;
  };

  return Array.isArray(input) ? input.map(transform) : transform(input) as Partial<NewGuestObject>;
};