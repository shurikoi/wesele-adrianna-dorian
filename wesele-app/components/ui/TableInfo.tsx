'use client';

import { useGuestAccesses } from "../contexts/GuestAccessesProvider";

export default function TableInfo({ selectedTable }: { selectedTable: string | null; }) {
    const { guestAccesses } = useGuestAccesses();

    const guests = guestAccesses?.
        filter((guestAccess) => guestAccess.table === selectedTable).
        map((guestAccess) => {
            let accompanimentText = "";

            if (guestAccess.accompaniment)
                accompanimentText = `i osoba towarzysząca (${guestAccess.forGreeting})`;
            return (
                <div key={guestAccess._id}>{guestAccess.forGreeting} {accompanimentText}</div>
            );
        });

    if (!selectedTable || guests?.length === 0) return;

    return (
        <div className="w-full p-4 rounded-md bg-black/40 text-textPeach">
            <div className="font-bold text-xl">Stół {selectedTable}</div>
            <div>
                {guests}
            </div>
        </div>
    );
};
