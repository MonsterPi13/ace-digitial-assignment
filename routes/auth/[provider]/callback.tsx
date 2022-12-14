import { Handlers } from "$fresh/server.ts";
import { Providers } from "denoGrant";

import config from "@/utils/config.ts";
import denoGrant from "@/utils/denoGrant.ts";
import prisma from "@/utils/prisma.ts";
import { Prisma } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
  async GET(request, ctx) {
    const providerType = ctx.params.provider.toLowerCase();

    switch (providerType) {
      case Providers.github: {
        const token = await denoGrant.getToken(
          Providers.github,
          `${request.url}`,
        );
        if (token && "accessToken" in token) {
          const profile = await denoGrant.getProfile(
            Providers.github,
            token.accessToken,
          );

          if (profile) {
            const { id, avatar_url, login } = profile;

            const data: Prisma.UserCreateInput = {
              avatar_url,
              provider_type: providerType,
              provider_userId: Number(id),
              username: login,
              created_at: new Date(),
            };

            const result = await prisma.user.create({
              data,
            });

            return Response.json(result);
          }
        }
      }
    }
    return Response.redirect(config.base_url);
  },
};
