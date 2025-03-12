import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/connection";
import Guest from "@/models/Guest";
import GuestAccess from "@/models/GuestAccess";
import { guestAccess } from "@/lib/types";
import { toNewGuestsObject } from "@/utils/toNewGuestsObject";
import { toNewGuestAccess } from "@/utils/toNewGuestAccess";

const guestAccesses = guestAccess.array();

export async function POST(req: NextRequest) {
    try {
        await connection();
        const data = guestAccesses.parse(await req.json());

        const guestAccessResults = [];

        for (const guestAccessRequest of data) {
            const { code, type, guests, accommodation, forGreeting } = guestAccessRequest;

            const newGuests = await Guest.insertMany(toNewGuestsObject(guests));

            const guestIds = newGuests.map(guest => guest._id);

            const newGuestAccessObject = toNewGuestAccess({ code, type, accommodation, forGreeting });
            const newGuestAccess = await GuestAccess.create({ ...newGuestAccessObject, guests: guestIds });

            guestAccessResults.push(newGuestAccess);
        }

        return NextResponse.json({ guestAccess: guestAccessResults }, { status: 201 });

    } catch (error) {
        console.error("Error creating guest access:", error);
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
