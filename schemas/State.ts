import { Prisma } from "@/generated/client/deno/index.d.ts";

export default interface State {
  userId?: number;
  user: Prisma.UserCreateInput;
}
