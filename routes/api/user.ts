import { Handlers } from "$fresh/server.ts";
import { PrismaClient } from "../../generated/client/deno/edge.ts";

import config from "@/utils/config.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.DATABASE_URL,
    },
  },
});

export const handler: Handlers = {
  async GET(_req) {
    try {
      const users = await prisma.user.findMany();
      return Response.json(users);
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
