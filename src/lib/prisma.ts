import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.POSTGRESQL_PRISMA_DATABASE_URL}`;
if (!connectionString) {
  throw new Error(
  "POSTGRESQL_DATABASE_URL environment variable is not set"
  )
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };