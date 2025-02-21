import connection from "@/lib/connection";
// import { guest } from "@/lib/types";
import Guest from "@/models/Guest";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connection();
        const { _id, ...guestUpdateRequest } = await req.json();
        const response = await Guest.updateOne({ _id }, { $set: { ...guestUpdateRequest } });
        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        console.error("Error getting guest access:", error);
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}