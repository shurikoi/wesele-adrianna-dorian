import { auth } from "@/auth";
import connection from "@/lib/connection";
import { guest, NewGuestObject } from "@/lib/types";
import Guest from "@/models/Guest";
import { toNewGuestsObject } from "@/utils/toNewGuestsObject";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

const updateGuestSchema = guest.partial().required({ _id: true });

export async function POST(req: NextRequest) {
    const session = await auth();

    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    if (!req.body) return NextResponse.json({ error: "No data provided" }, { status: 400 });
    
    try {
        await connection();
        const data = updateGuestSchema.parse(await req.json());

        if (data._id !==  session.user?._id) {
            if (session?.user?.role !== "admin") {
                return NextResponse.json({ error: "Forbidden" }, { status: 403 });
            }
        }

        const { _id, ...guestUpdateRequest } = toNewGuestsObject(data) as Partial<NewGuestObject>; // because of the parsed data we know that _id field exists
        const response = await Guest.updateOne({ _id }, { $set: { ...guestUpdateRequest } }).orFail();
        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}