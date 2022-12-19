import { Handlers } from "$fresh/server.ts";

import prisma from "@/utils/prisma.ts";

export const handler: Handlers = {
  async GET(_req) {
    try {
      const prizes = await prisma.prizePool.findMany({
        where: {
          date: {
            lte: new Date("2020-10-30"),
          },
        },
      });
      return Response.json(prizes);
    } catch (error) {
      return Response.json(
        {
          message: error.message || "Unknown Error",
        },
        {
          status: 500,
        },
      );
    }
  },
};
