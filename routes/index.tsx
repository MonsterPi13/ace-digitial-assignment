import { Handlers, PageProps } from "$fresh/server.ts";

import config from "@/utils/config.ts";
import { PropsWithLandingPage } from "@/schemas/PropsWithLandingPage.ts";

import { pageTitle } from "@/signals/index.ts";
import Layout from "@/layout/index.tsx";
import LandingView from "@/components/LandingView.tsx";
import { heroData } from "@/utils/heroData.ts";

export const handler: Handlers<PropsWithLandingPage> = {
  GET(req: Request, ctx) {
    if (ctx.state.userId) {
      return Response.redirect(`${config.base_url}/dashboard`);
    }

    const count = heroData.length;
    const randomIndex = Math.floor(Math.random() * count);
    const hero = heroData[randomIndex];

    return ctx.render({ hero });
  },
};

export default function Home({ data }: PageProps<PropsWithLandingPage>) {
  pageTitle.value = "Ti Overview";

  return (
    <Layout isShownDrawButton={false} hero={data.hero}>
      <LandingView hero={data.hero} />
    </Layout>
  );
}
