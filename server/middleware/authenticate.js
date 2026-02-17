import jwt from "jsonwebtoken";
import "dotenv/config";

export const adminAuthentication = async (req, res, next) => {

  const token = req.headers["authorization"];

  try {
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Missing credentials" });
    }
    const result = jwt.verify(token, process.env.JWT_SECRET);
    if (result){
        next()
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server middleware Error" });
  }
};
