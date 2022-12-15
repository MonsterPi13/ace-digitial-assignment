import EnvNames from "../constants/EnvVars.ts";
import { config as dotEnvConfig } from "dotEnv";
import { Config, ConfigSchema } from "@/schemas/Config.ts";

if (Deno.env.get(EnvNames.DENO_ENV) !== "production") {
  await dotEnvConfig({
    export: true,
  });
}

const envConfig: Config = {
  base_url: Deno.env.get(EnvNames.BASE_URL) || "",
  environment: Deno.env.get(EnvNames.DENO_ENV) || "",
  oauth: {
    github: {
      client_id: Deno.env.get(EnvNames.GITHUB_CLIENT_ID) || "",
      client_secret: Deno.env.get(EnvNames.GITHUB_CLIENT_SECRET) || "",
    },
  },
  DATABASE_URL: Deno.env.get(EnvNames.DATABASE_URL) || "",
  cookie_secret: Deno.env.get(EnvNames.COOKIE_SECRET) || "",
};

const config = ConfigSchema.parse(envConfig);

export default config;
