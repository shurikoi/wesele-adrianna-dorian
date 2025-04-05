import connection from "@/lib/connection";
import { guestAccess, GuestAccessObject } from "@/lib/types";
import GuestAccess from "@/models/GuestAccess";
import { toNewGuestAccess } from "@/utils/toNewGuestAccess";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

const updateGuestAccessSchema = guestAccess.partial().required({ _id: true });

export async function POST(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    const userId = token?.user?._id;
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    try {
        await connection();
        const data = updateGuestAccessSchema.parse(await req.json());

        if (data._id !== userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { _id, ...guestAccessUpdateRequest } = toNewGuestAccess(data) as Partial<GuestAccessObject>; // because of the parsed data we know that _id field exists
        const response = await GuestAccess.updateOne({ _id }, { $set: { ...guestAccessUpdateRequest } }).orFail();
        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}