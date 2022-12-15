// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import State from "@/schemas/State.ts";
import { verifySignedCookie } from "squishyCookies";

import config from "@/utils/config.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const userId = await verifySignedCookie(
    req.headers,
    "user_id",
    config.cookie_secret,
  );

  if (userId) {
    ctx.state.userId = Number(userId.split(".")[0]);
  }

  return ctx.next();
}
