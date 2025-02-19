import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/types";
import GuestAccess from "./models/GuestAccess";
import { ZodError } from "zod";
import connection from "./lib/connection";
import "@/models/Guest";

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
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.user) {
                session.user = token.user;
            }
            return session;
        }
    },
});