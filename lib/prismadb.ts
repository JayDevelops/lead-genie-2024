/*
* prismadb.ts is responsible to create only one instance to connect to our database.
* This way we do not instantiate a new prisma client every time, which can be slow and/or make leaks!
* Thus we will use this whenever we read/write data from the database ONLY ONCE whenever we need to.
* */
import {PrismaClient} from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prismadb = globalForPrisma.prisma ?? new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prismadb
}