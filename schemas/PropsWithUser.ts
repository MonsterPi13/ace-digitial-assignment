import Prisma from "@/generated/client/deno/index.d.ts";

export interface PropsWithUser {
  user?: Prisma.User | null;
}
