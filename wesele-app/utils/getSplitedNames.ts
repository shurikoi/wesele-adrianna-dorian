import { GuestAccessObject } from "@/lib/types";

export default function getSplitedNames(guests: GuestAccessObject["guests"]) {
    return guests.length > 1 ? guests.map((guest) => guest.name.split(' ')[0]).join(' i ') : guests[0].name.split(' ')[0];
};
