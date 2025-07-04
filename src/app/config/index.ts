import path from "path";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const prisma = new PrismaClient();

export default {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
};
