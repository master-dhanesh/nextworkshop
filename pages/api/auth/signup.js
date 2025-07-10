import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ message: "Invalid Credientials" });
        }

        const client = await connectToDatabase();
        const db = client.db();

        // existing user
        const existingUser = await db.collection("users").findOne({ email });

        if (existingUser) {
            client.close();
            res.status(422).json({ message: "user already exists" });
        }

        await db.collection("users").insertOne({
            email,
            password,
        });

        client.close();
        res.status(201).json({ message: "User Created!" });
    }
    res.status(401).json({
        message: "Method Not Allowed",
    });
}
