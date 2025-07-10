import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        "mongodb+srv://dhanesh-malviya:dhanesh123@mastercluster.i7cpa.mongodb.net/next-auth"
    );
    return client;
}
