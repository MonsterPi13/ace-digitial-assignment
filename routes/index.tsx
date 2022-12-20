import { Handlers, PageProps } from "$fresh/server.ts";

import config from "@/utils/config.ts";
import prisma from "@/utils/prisma.ts";
import { PropsWithLandingPage } from "@/schemas/PropsWithLandingPage.ts";

import { pageTitle } from "@/signals/index.ts";
import Layout from "@/layout/index.tsx";
import LandingView from "@/components/LandingView.tsx";

export const handler: Handlers<PropsWithLandingPage> = {
  async GET(req: Request, ctx) {
    if (ctx.state.userId) {
      return Response.redirect(`${config.base_url}/dashboard`);
    }

    const count = await prisma.heroList.count();
    const randomIndex = Math.floor(Math.random() * count);
    const heroList = await prisma.heroList.findMany({
      take: 1,
      skip: randomIndex,
    });

    const hero = heroList[0];

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
