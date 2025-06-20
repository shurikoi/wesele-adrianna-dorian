import connection from "@/lib/connection";
import Table from "@/models/Table";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connection();
        const { guestId, tableNumber, chair } = await req.json();
        const result = await Table.insertOne({
            guestId,
            tableNumber,
            chair
        });
        return NextResponse.json({ result });

    } catch (error) {
        console.error("Error setting table:", error);
        // TODO: zod validation
        // if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// import connection from "@/lib/connection";
// import { GuestAccessObject } from "@/lib/types";
// import Guest from "@/models/Guest";
// import GuestAccess from "@/models/GuestAccess";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//     try {
//         await connection();
//         const { code, table, chair } = await req.json();
//         const guestAccess = await GuestAccess.findOne({ code }).orFail();
//         const { guests } = guestAccess as GuestAccessObject;
//         const test = await Guest.find({ _id: { $in: guests } });
//         // const result = await Guest.updateOne(
//         //     { code },
//         //     { $set: { table, chair } }
//         // );
//         return NextResponse.json({ test, table, chair });

//     } catch (error) {
//         console.error("Error setting table:", error);
//         // TODO: zod validation
//         // if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
//         if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }


// import connection from "@/lib/connection";
// import Guest from "@/models/Guest";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//     try {
//         await connection();
//         const { code, chair, table } = await req.json();
//         const result = await Guest.updateOne(
//             { code: code },
//             { $set: { table, chair } }
//         );
//         return NextResponse.json({ result });

//     } catch (error) {
//         console.error("Error setting table:", error);
//         // TODO: zod validation
//         // if (error instanceof ZodError) return NextResponse.json({ error: error.issues }, { status: 500 });
//         if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }