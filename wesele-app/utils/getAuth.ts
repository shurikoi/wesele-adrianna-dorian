import { auth } from "@/auth";

export default async function getAuth() {
    return await auth();
}