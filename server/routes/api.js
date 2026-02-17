import express from "express";
import "dotenv/config";
import { mongoDB } from "../db/connectMongoDB.js";


const MONGO_DB_NAME = process.env.MONGO_DB_NAME

export const api = express();

api.post("/api/complaints", async (req, res) => {
  const { category, message } = req.body;
  if (!category || !message) {
    return res.status(401).json({ error: "Unauthorized: Missing credentials" });
  }
  try {
    const createdAt = new Date()
    await mongoDB.collection(MONGO_DB_NAME).insertOne({ category:category, message:message, createdAt:createdAt });
    res.status(200).json({ message: "Message added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }

});
api.post("/api/admin/login", async (req, res) => {
  //   const token = req.headers["token"];
  const { password } = req.body;
  if (!password) {
    return res.status(401).json({ error: "Unauthorized: Missing credentials" });
  }
  try {
    // const decoded = jwt.verify(token, "some_long_random_secret");
    const createdAt = new Date()
    await mongoDB.collection(MONGO_DB_NAME).insertOne({ category:category, message:message, createdAt:createdAt });
    res.status(200).json({ message: "Message added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

