import connection from "@/lib/connection";
import GuestAccess from "@/models/GuestAccess";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connection();
        const { codes, table } = await req.json();
        const result = await GuestAccess.updateMany(
            { code: { $in: codes } },
            { $set: { table } }
        );
        return NextResponse.json({ result });

    } catch (error) {
        console.error("Error setting table:", error);
        // TODO: zod validation
        // if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}