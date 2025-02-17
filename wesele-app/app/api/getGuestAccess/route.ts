import connection from "@/lib/connection";
import GuestAccess from "@/models/GuestAccess";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getGuestAccess = z.object({ id: z.string().optional(), code: z.string().optional() });

export async function POST(req: NextRequest) {
    try {
        await connection();
        const guestAccessRequest = getGuestAccess.parse(await req.json());
        console.log(guestAccessRequest);
        const guestAccess = await GuestAccess.find(guestAccessRequest.hasOwnProperty("id") ? { _id: guestAccessRequest.id } : guestAccessRequest);
        return NextResponse.json({ guestAccess }, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}