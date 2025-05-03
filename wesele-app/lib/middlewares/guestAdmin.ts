import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function guestAdmin(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    if (!token || token.role !== 'admin') {
        const url = req.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }
}