import { guestAccess, GuestAccessObject } from "@/lib/types";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GuestOptionalFields = guestAccess.partial();
type GuestAccessTypePartial = z.infer<typeof GuestOptionalFields>;

export const toNewGuestAccess = (input: GuestAccessTypePartial | GuestAccessTypePartial[]): Partial<GuestAccessObject> | Partial<GuestAccessObject>[] => {
  const transform = ({ code, type, accompaniment, accommodation, accommodationResponse, _id, forGreeting, role }: GuestAccessTypePartial): Partial<GuestAccessObject> => {
    const newGuestObject: Partial<GuestAccessObject> = {};
    if (_id) newGuestObject._id = _id;
    if (forGreeting) newGuestObject.forGreeting = forGreeting;
    if (type) newGuestObject.type = type;
    if (role) newGuestObject.role = role;
    if (code) newGuestObject.code = code;
    if (accompaniment !== undefined) newGuestObject.accompaniment = { accompaniment };
    if (accommodation) newGuestObject.accommodation = { needsAccommodation: accommodation, ...newGuestObject.accommodation};
    if (accommodationResponse !== undefined) newGuestObject.accommodation = { accommodationResponse, ...newGuestObject.accommodation};
    return newGuestObject;
  };

  return Array.isArray(input) ? input.map(transform) : transform(input) as Partial<GuestAccessObject>;
};