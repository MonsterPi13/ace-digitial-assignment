import { Handlers, PageProps } from "$fresh/server.ts";

import Layout from "@/layout/index.tsx";

import Prisma from "@/generated/client/deno/index.d.ts";
import State from "@/schemas/State.ts";
import { PropsWithUser } from "@/schemas/PropsWithUser.ts";
import DashboardView from "@/components/DashboardView.tsx";
import prisma from "@/utils/prisma.ts";
import config from "@/utils/config.ts";

type DashboardPageProps = {
  prizeData: Prisma.PrizePool[];
} & PropsWithUser;

export const handler: Handlers<DashboardPageProps, State> = {
  async GET(req, ctx) {
    const querySourceMap = new Map([
      ["ti11", "Ti11"],
      ["ti10", "Ti10"],
      ["ti9", "Ti9"],
      ["ti8", "Ti8"],
      ["ti7", "Ti7"],
      ["ti6", "Ti6"],
      ["ti5", "Ti5"],
      ["ti4", "Ti4"],
      ["ti3", "Ti3"],
      ["ti2", "Ti2"],
      ["ti1", "Ti1"],
    ]);

    const query = querySourceMap.get(ctx.params.id.toLowerCase());

    if (!query) {
      return Response.redirect(`${config.base_url}/404`);
    }

    let prizeData: Prisma.PrizePool[] = [];
    const res = await prisma.prizePool.findMany({
      where: {
        annualEdition: query as Prisma.Annual_edition,
      },
    });

    if (res) {
      prizeData = res;
    }

    return ctx.render({
      user: ctx.state.user,
      prizeData,
    });
  },
};

const Dashboard = ({ data }: PageProps<DashboardPageProps>) => {
  return (
    <Layout isShownDrawButton={true} user={data.user}>
      <DashboardView prizeData={data.prizeData} />
    </Layout>
  );
};

export default Dashboard;
