import Prisma from "@/generated/client/deno/index.d.ts";

import { Hero } from "./Hero.ts";

export interface PropsWithLandingPage {
  hero?: Hero;
}

export interface PropsWithUser {
  user?: Prisma.User;
}

export interface PropsWithPrize {
  prizeData: Prisma.PrizePool[];
}

export type PropsWithDashboardPage = PropsWithPrize & PropsWithUser;

export type PropsWithLayout =
  & {
    isShownDrawButton?: boolean;
  }
  & PropsWithLandingPage
  & PropsWithUser;
