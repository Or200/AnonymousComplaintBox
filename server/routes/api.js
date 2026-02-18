import express from "express";
import "dotenv/config";
import { mongoDB } from "../db/connectMongoDB.js";
import { tokenCreator } from "../services/createToken.js";
import { adminAuthentication } from "../middleware/authenticate.js";

const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

export const api = express();

api.post("/api/complaints", async (req, res) => {
  const { category, message } = req.body;
  if (!category || !message) {
    return res.status(401).json({ error: "Unauthorized: Missing credentials" });
  }
  try {
    const createdAt = new Date();
    await mongoDB.collection(MONGO_DB_NAME).insertOne({
      category: category,
      message: message,
      createdAt: createdAt,
    });
    res.status(200).json({ message: "Message added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

api.post("/api/admin/login", async (req, res) => {
  const { password } = req.body;
  // if (password !== process.env.ADMIN_PASSWORD) {
  //   return res.status(401).json({ error: "Unauthorized: password wrong" });
  // }
  try {
    const userPassObj = await mongoDB
      .collection("users")
      .find({ password: password })
      .toArray();

    if (userPassObj.length !== 0) {
      const userToken = tokenCreator(userPassObj[0]);
      res
        .status(200)
        .json({ message: "Verification successful", token: userToken });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

api.get("/api/users", async (req, res) => {
  try {
    const userPassObj = await mongoDB.collection("users").find().toArray();
    res.status(200).json(userPassObj[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

api.get("/api/complaints", adminAuthentication, async (req, res) => {
  try {
    const data = await mongoDB
      .collection(MONGO_DB_NAME)
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    res.send(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
