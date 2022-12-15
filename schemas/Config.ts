import { z } from "zod";

import EnvNames from "../constants/EnvVars.ts";

function getErrorMessage(environmentVariableName: EnvNames) {
  return {
    message: `Missing ${environmentVariableName} environment variable.`,
  };
}

export const ConfigSchema = z.object({
  DATABASE_URL: z.string().min(1, getErrorMessage(EnvNames.DATABASE_URL)),
  base_url: z.string().min(
    1,
    getErrorMessage(EnvNames.BASE_URL),
  ),
  environment: z.string().min(
    1,
    getErrorMessage(EnvNames.DENO_ENV),
  ),
  oauth: z.object({
    github: z.object({
      client_id: z.string().min(
        1,
        getErrorMessage(EnvNames.GITHUB_CLIENT_ID),
      ),
      client_secret: z.string().min(
        1,
        getErrorMessage(EnvNames.GITHUB_CLIENT_SECRET),
      ),
    }),
  }),
  cookie_secret: z.string().min(1, getErrorMessage(EnvNames.COOKIE_SECRET)),
});

export type Config = z.infer<typeof ConfigSchema>;
