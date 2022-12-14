import { Handlers } from "$fresh/server.ts";

import prisma from "@/utils/prisma.ts";

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
