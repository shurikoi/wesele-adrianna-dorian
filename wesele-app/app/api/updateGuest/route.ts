import connection from "@/lib/connection";
import { guest, NewGuestObject } from "@/lib/types";
import Guest from "@/models/Guest";
import { toNewGuestsObject } from "@/utils/toNewGuestsObject";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

const updateGuestSchema = guest.partial().required({ _id: true });

export async function POST(req: NextRequest) {
    try {
        await connection();
        const data = updateGuestSchema.parse(await req.json());
        const { _id, ...guestUpdateRequest } = toNewGuestsObject(data) as Partial<NewGuestObject>; // because of the parsed data we know that _id field exists
        const response = await Guest.updateOne({ _id }, { $set: { ...guestUpdateRequest } }).orFail();
        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}