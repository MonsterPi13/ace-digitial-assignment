import { Handlers } from "$fresh/server.ts";

import config from "@/utils/config.ts";
import { deleteCookie } from "cookie";

export const handler: Handlers = {
  GET() {
    const response = new Response("", {
      status: 302,
      headers: {
        Location: config.base_url,
      },
    });
    deleteCookie(response.headers, "user_id");
    return response;
  },
};
