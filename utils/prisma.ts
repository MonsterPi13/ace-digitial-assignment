import { PrismaClient } from "@/generated/client/deno/edge.ts";

import config from "@/utils/config.ts";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.DATABASE_URL,
    },
  },
});

export default prisma;
