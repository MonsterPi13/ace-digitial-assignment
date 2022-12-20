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
    <Layout isShownDrawButton={false}>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 xl:px-0">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-4xl font-extrabold text-[#91D8E4]">
            404 - Page Not Found
          </h1>
          <p class="mb-6 text-gray-500 md:mb-10 dark:text-gray-400 md:text-center md:text-xl">
            Whoops! That page doesn’t exist.
          </p>
          <a
            href="/"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Back To Home
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              >
              </path>
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}
