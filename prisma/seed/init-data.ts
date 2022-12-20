import prisma from "@/utils/prisma.ts";
import { prizeData } from "./seed.ts";

for (const data of prizeData) {
  await prisma.prizePool.create({
    data,
  });
}

console.log("prize data init success");

await prisma.$disconnect();
