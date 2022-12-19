import Prisma from "@/generated/client/deno/index.d.ts";

export interface PropsWithPrize {
  prizeData: Prisma.PrizePool[] | null;
}
