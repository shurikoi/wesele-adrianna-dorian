import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/connection";
import Guest from "@/models/Guest";
import GuestAccess from "@/models/GuestAccess";
import { guestAccess } from "@/lib/types";
import { toNewGuestsObject } from "@/utils/toNewGuestsObject";
import { toNewGuestAccess } from "@/utils/toNewGuestAccess";

export async function POST(req: NextRequest) {
  try {
    await connection();
    const { code, type, guests, accommodation } = guestAccess.parse(await req.json());
    const newGuestAccessObject = toNewGuestAccess({ code, type, accommodation });

    const newGuests = await Guest.create(toNewGuestsObject(guests));
    console.log('asdds', { ...newGuestAccessObject, guests: newGuests });
    const newGuestAccess = await GuestAccess.insertOne({ ...newGuestAccessObject, guests: newGuests });

    return NextResponse.json({ guestAccess: newGuestAccess }, { status: 201 });
  } catch (error) {
    console.error("Error creating guest access:", error);
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

