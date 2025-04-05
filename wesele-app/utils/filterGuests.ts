import { GuestAccessObject } from "@/lib/types";

export const filterGuests = (data: GuestAccessObject[], searchTerm: string) => {
    return data?.filter(guest =>
        guest.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.guests.some(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
};

export const sortGuests = (data: GuestAccessObject[], sortOptions: string[]) => {
    return data?.sort((a, b) => {
        for (const option of sortOptions) {
            if (option === 'needsAccommodation') {
                const aValue = a.accommodation?.needsAccommodation ?? false;
                const bValue = b.accommodation?.needsAccommodation ?? false;
                if (aValue !== bValue) return aValue ? -1 : 1;
            } else if (option === 'accommodationResponse') {
                const aValue = a.accommodation?.accommodationResponse ?? false;
                const bValue = b.accommodation?.accommodationResponse ?? false;
                if (aValue !== bValue) return aValue ? -1 : 1;
            }
        }
        return 0;
    });
};