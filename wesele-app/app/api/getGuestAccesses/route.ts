import connection from "@/lib/connection";
import GuestAccess from "@/models/GuestAccess";
import { NextResponse } from "next/server";
import "@/models/Guest";
import { auth } from "@/auth";


export async function GET() {
    const session = await auth();

    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    if (session?.user?.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    
    try {
        await connection();
        const guestAccesses = await GuestAccess.find({}).populate('guests');
        return NextResponse.json(guestAccesses, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}