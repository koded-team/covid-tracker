import { PrismaClient } from "@prisma/client";
import { serialize } from "../utils/serialize";

declare global {
  var prisma: PrismaClient | undefined
};

const db = global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if(!global.prisma) {
  db.$use(async(params, next) => {
    let result = await next(params);
    return serialize(result);
  });
};

if (process.env.NODE_ENV !== "production") {
  global.prisma = db;
};

export { db };
