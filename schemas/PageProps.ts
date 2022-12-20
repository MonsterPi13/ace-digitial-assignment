import Prisma from "@/generated/client/deno/index.d.ts";

import { Hero } from "./Hero.ts";

export interface PropsWithLandingPage {
  hero?: Hero;
}

export interface PropsWithUser {
  user?: Prisma.User;
}

export type PropsWithDashboardPage = {
  prizeData: Prisma.PrizePool[];
} & PropsWithUser;

export type PropsWithLayout =
  & {
    isShownDrawButton?: boolean;
  }
  & PropsWithLandingPage
  & PropsWithUser;
