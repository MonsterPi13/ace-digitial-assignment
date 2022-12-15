import DenoGrant, { Providers } from "denoGrant";

import config from "./config.ts";

const denoGrant = new DenoGrant({
  base_uri: config.base_url,
  strategies: [{
    provider: Providers.github,
    client_id: config.oauth.github.client_id,
    client_secret: config.oauth.github.client_secret,
    redirect_path: "/auth/github/callback",
    redirect_uri: `${config.base_url}/auth/github/callback`,
    scope: "",
  }],
});

export default denoGrant;

export const ProvidersMap = new Map<string, Providers>(
  Object.entries(Providers),
);
