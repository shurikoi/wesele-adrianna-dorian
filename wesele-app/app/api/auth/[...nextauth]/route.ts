import { signInSchema } from "@/lib/types";
import GuestAccess from "@/models/GuestAccess";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            authorize: async (credentials) => {
                console.log("Received credentials:", credentials);

                try {
                    const { code } = await signInSchema.parseAsync(credentials);
                    const guest = await GuestAccess.findOne({ code });
                    console.log("authorize", code, "\n ", guest);

                    return guest;
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt" as const,
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
