import connection from "@/lib/connection";
import GuestAccess from "@/models/GuestAccess";
import { NextResponse } from "next/server";
import "@/models/Guest";


export async function GET() {
    try {
        await connection();
        const guestAccesses = await GuestAccess.find({}).populate('guests');
        return NextResponse.json(guestAccesses, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}