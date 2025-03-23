import { PrismaClient } from '@prisma/client';

/* eslint-disable no-var */
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
// Compare this snippet from app/%28auth%29/sign-out/page.tsx:

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
