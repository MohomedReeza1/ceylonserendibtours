import { PrismaClient } from "@prisma/client";

// Keep a single Prisma instance in dev to avoid "too many connections" on hot reloads.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["warn", "error"], // keep logs light
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
