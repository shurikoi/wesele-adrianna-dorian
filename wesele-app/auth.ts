import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { GuestAccessObject, signInSchema } from "./lib/types";
import GuestAccess from "./models/GuestAccess";
import connection from "./lib/connection";
import "@/models/Guest";
import { AdapterUser } from "next-auth/adapters";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                code: {}
            },
            authorize: async (credentials) => {
                console.log("Received credentials:", credentials);
                try {
                    await connection();
                    const { code } = await signInSchema.parseAsync(credentials);
                    const guest = await GuestAccess.findOne({ code }).populate('guests');
                    console.log('guest', guest);
                    if (!guest) throw new Error("Nieprawidłowy kod dostępu");
                    return guest;
                } catch (error) {
                    if (error instanceof Error) return error.message;
                    return error;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            await connection();
            // const guestAccess = await GuestAccess.findOne({ code: user?.code || (token?.user as GuestAccessObject).code }).populate('guests');
            // if (guestAccess) {
            //     token.user = guestAccess;
            // }
            
            if (user) {
                token.user = user as GuestAccessObject;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.user) {
                session.user = token.user as AdapterUser & GuestAccessObject;
            }
            return session;
        }
    },
});