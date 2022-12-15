import { Handlers, PageProps } from "$fresh/server.ts";

import Layout from "@/layout/index.tsx";

import State from "@/schemas/State.ts";
import { PropsWithUser } from "@/schemas/PropsWithUser.ts";

type DashboardPageProps = PropsWithUser;

export const handler: Handlers<DashboardPageProps, State> = {
  GET(req, ctx) {
    return ctx.render({
      user: ctx.state.user,
    });
  },
};

const Dashboard = ({ data }: PageProps<DashboardPageProps>) => {
  return <Layout user={data.user} />;
};

export default Dashboard;
