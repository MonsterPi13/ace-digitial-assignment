import prisma from "@/utils/prisma.ts";
import { heroData, prizeData } from "./seed.ts";

for (const data of heroData) {
  await prisma.heroList.create({
    data,
  });
}

console.log("hero data init success.");

for (const data of prizeData) {
  await prisma.prizePool.create({
    data,
  });
}

console.log("prize data init success");

await prisma.$disconnect();
