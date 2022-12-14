import { Handlers } from "$fresh/server.ts";
import { Providers } from "denoGrant";

import config from "@/utils/config.ts";
import denoGrant from "@/utils/denoGrant.ts";

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
          console.log(profile);
        }
      }
    }
    return Response.redirect(config.base_url);
  },
};

// app.get("/auth/github", async (ctx) => {
//   const code = ctx.query["code"];
//   const token = await denoGrant.getToken(
//     Providers.github,
//     `${BASE_URL}/auth/github?code=${code}&scope=`,
//   );

//   if (token && "accessToken" in token) {
//     const profile = await denoGrant.getProfile(
//       Providers.github,
//       token.accessToken,
//     );
//     return ctx.redirect(`/u/${profile.login}`);
//   }

//   return { err: "some error" };
// });
