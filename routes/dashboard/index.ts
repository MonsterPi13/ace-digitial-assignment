import config from "@/utils/config.ts";
import { pageTitle } from "@/signals/index.ts";

export const handler = {
  GET() {
    pageTitle.value = "Ti Overview Dashboard";
    return Response.redirect(`${config.base_url}/dashboard/ti11`);
  },
};
