import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import Providers from "next-auth/providers/credentials";

export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        Providers({
            async authorize(credientials) {
                const client = await connectToDatabase();
                const db = client.db();

                if (!credientials.email || !credientials.password) {
                    throw new Error("Invalid Credientials");
                }

                const user = await db
                    .collection("users")
                    .findOne({ email: credientials.email });

                if (!user) {
                    client.close();
                    throw Error("No user found");
                }

                const isValid = user.password == credientials.password;
                if (!isValid) {
                    client.close();
                    throw new Error("Could not log in!");
                }

                client.close();
                return { email: credientials.email };
            },
        }),
    ],
});
