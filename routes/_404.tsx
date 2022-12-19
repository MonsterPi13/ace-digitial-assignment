import { HandlerContext, UnknownPageProps } from "$fresh/server.ts";
import Layout from "@/layout/index.tsx";

export function handler(req: Request, ctx: HandlerContext) {
  const acceptHeader = req.headers.get("accept");
  if (acceptHeader && acceptHeader.includes("json")) {
    return new Response(
      JSON.stringify({
        message: "Not Found",
      }),
      {
        status: 404,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }
  return ctx.render();
}

export default function NotFoundPage({ url }: UnknownPageProps) {
  const message = url.searchParams.get("message");
  return (
    <Layout>
      404 not found
    </Layout>
  );
}
