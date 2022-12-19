import config from "@/utils/config.ts";

export const handler = {
  GET() {
    return Response.redirect(`${config.base_url}/dashboard/ti11`);
  },
};
