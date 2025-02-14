import { MockGuestData } from "@/lib/types";

export default function getSplitedNames(guests: MockGuestData['guests']) {
    return guests.length > 1 ? guests.map((guest) => guest.name.split(' ')[0]).join(' i ') : guests[0].name.split(' ')[0];

    // if (guests.length === 1) {
    //     return `Cześć ${guests[0].name}!`;
    // }

    // if (guests.length === 2) {
    //     const [firstGuest, secondGuest] = guests;
    //     const expectedAccompanimentName = `${firstGuest.name}'s beautiful accompaniment person`;

    //     if (secondGuest.name === expectedAccompanimentName) {
    //         return `Cześć ${firstGuest.name}!`;
    //     } else {
    //         return `Cześć ${firstGuest.name} i ${secondGuest.name}!`;
    //     }
    // }

    // return "Cześć!"; // Fallback in case of unexpected data
};
