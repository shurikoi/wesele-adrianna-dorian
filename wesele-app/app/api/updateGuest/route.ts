import connection from "@/lib/connection";
import { guest, NewGuestObject } from "@/lib/types";
import Guest from "@/models/Guest";
import GuestAccess from "@/models/GuestAccess";
import { toNewGuestsObject } from "@/utils/toNewGuestsObject";
import { Types } from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

const updateGuestSchema = guest.partial().required({ _id: true });

export async function POST(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    const userId = token?.user?._id;
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    try {
        await connection();
        const data = updateGuestSchema.parse(await req.json());

        const validateUser = await GuestAccess.findOne({ guests: new Types.ObjectId(data._id) }).orFail();
        if (validateUser._id !== userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { _id, ...guestUpdateRequest } = toNewGuestsObject(data) as Partial<NewGuestObject>; // because of the parsed data we know that _id field exists
        const response = await Guest.updateOne({ _id }, { $set: { ...guestUpdateRequest } }).orFail();
        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}