import EnvNames from "../constants/EnvVars.ts";
import { config as dotEnvConfig } from "dotEnv";
import { Config, ConfigSchema } from "@/schemas/Config.ts";

const env = await dotEnvConfig();

const envConfig: Config = {
  base_url: env[EnvNames.BASE_URL] || "",
  environment: env[EnvNames.DENO_ENV] || "",
  oauth: {
    github: {
      client_id: env[EnvNames.GITHUB_CLIENT_ID] || "",
      client_secret: env[EnvNames.GITHUB_CLIENT_SECRET] || "",
    },
  },
  DATABASE_URL: env[EnvNames.DATABASE_URL] || "",
};

const config = ConfigSchema.parse(envConfig);

export default config;
