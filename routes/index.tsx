import { Handlers } from "$fresh/server.ts";

import config from "@/utils/config.ts";
import Layout from "@/layout/index.tsx";

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
      <img
        src="/images/illustration/drow_ranger.jpeg"
        alt=""
        class="block mx-auto my-10 w-1/2 rounded-sm sm:rounded-3xl max-w-2xl"
      />
    </Layout>
  );
}
