import { Handlers } from "$fresh/server.ts";

import config from "@/utils/config.ts";
import Layout from "@/layout/index.tsx";
import LandingView from "../components/LandingView.tsx";

export const handler: Handlers = {
  GET(req: Request, ctx) {
    if (ctx.state.userId) {
      return Response.redirect(`${config.base_url}/dashboard`);
    }

    return ctx.render();
  },
};

export default function Home() {
  return (
    <Layout>
      <LandingView />
    </Layout>
  );
}
