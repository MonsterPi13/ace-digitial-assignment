import { Handlers } from "$fresh/server.ts";
import { Providers } from "denoGrant";

import config from "@/utils/config.ts";
import denoGrant from "@/utils/denoGrant.ts";
import prisma from "@/utils/prisma.ts";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { createSignedCookie } from "squishyCookies";

export const handler: Handlers = {
  async GET(request, ctx) {
    const providerType = ctx.params.provider.toLowerCase();

    console.log("${request.url}", `${request.url}`);

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

          let userId: string;

          if (profile) {
            const socialProfile = await prisma.user.findFirst({
              where: {
                provider_userId: Number(profile.id),
                provider_type: providerType,
              },
            });

            const { id, avatar_url, login, html_url } = profile;
            const data: Prisma.UserCreateInput = {
              avatar_url,
              provider_type: providerType,
              provider_userId: Number(id),
              username: login,
              created_at: new Date(),
              html_url,
            };

            if (socialProfile) {
              await prisma.user.update({
                where: {
                  id: socialProfile.id,
                },
                data,
              });

              userId = socialProfile.id.toString();
            } else {
              const createdData = await prisma.user.create({
                data,
              });

              userId = createdData.id.toString();
            }

            if (userId) {
              const { cookie } = await createSignedCookie(
                "user_id",
                userId,
                config.cookie_secret,
                {
                  path: "/",
                  httpOnly: true,
                  secure: config.environment === "production",
                  maxAge: 60 * 60 * 24,
                },
              );
              return new Response("", {
                status: 302,
                headers: {
                  Location: config.base_url,
                  "set-cookie": cookie,
                },
              });
            }
          }
        }
      }
    }

    return Response.redirect(config.base_url);
  },
};
