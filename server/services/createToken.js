import jwt from "jsonwebtoken";
import "dotenv/config";

export function tokenCreator(obj) {
  let token = jwt.sign({ sub: obj.paasword }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN,});
  return token;
}
