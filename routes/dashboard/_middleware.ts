import { MiddlewareHandlerContext } from "$fresh/server.ts";

import State from "@/schemas/State.ts";
import config from "@/utils/config.ts";
import prisma from "@/utils/prisma.ts";

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  return ctx.next();
  // if (ctx.state.userId) {
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       id: ctx.state.userId,
  //     },
  //   });

  //   if (user) {
  //     ctx.state.user = user;
  //     return ctx.next();
  //   }

  //   return Response.redirect(`{config.base_url}`);
  // }
  // return Response.redirect(`${config.base_url}?message=UnAuthorized`);
}
