import { MongoClient } from "mongodb";
import "dotenv/config";

const mongoBdURL = process.env.MONGO_BD_CONNECT_URL;
const dbName = process.env.MONGO_DB_NAME;

async function connectMongoDB() {
  try {
    const client = new MongoClient(mongoBdURL);
    await client.connect();
    const db = client.db(dbName);
    console.log("connect mongoDB sucsses");
    return db;
  } catch (err) {
    console.error(err);
  }
}

export const mongoDB = await connectMongoDB()