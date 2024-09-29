# Neon Authorize + Auth0 RLS Example (SQL from the Backend)

This repository is a guided getting started example for Neon Authorize + Auth0 RLS.

1. Create a Neon project
2. Create a Auth0 application
3. Set up the `Allowed Callback URLs` and `Allowed Logout URLs` to `http://localhost:3030/api/auth/callback` and `http://localhost:3030` respectively in the Auth0 dashboard
4. Go to the Neon Console, and click "Authorize" to access the Neon Authorize configuration UI
5. Add a new authentication provider, and use `https://{yourDomain}/.well-known/jwks.json` as the JWKS URL (replace `yourDomain` with your Auth0's app domain)
6. Clone this repository and run `npm install` or `bun install`
7. Create a `.env` file in the root of this project and add the following:

```
# For the `neondb_owner` role.
DATABASE_URL=
# For the `authenticated`, passwordless role.
DATABASE_AUTHENTICATED_URL=

AUTH0_SECRET={ANY SECRET UNIQUE STRING} (at least 32 characters, used to encrypt the cookie - use `openssl rand -base64 32`)
AUTH0_ISSUER_BASE_URL=https://{YOUR_AUTH0_DOMAIN}
AUTH0_BASE_URL=http://localhost:3030/
AUTH0_CLIENT_ID={YOUR_AUTH0_CLIENT_ID}
AUTH0_CLIENT_SECRET={YOUR_AUTH0_CLIENT_SECRET}
AUTH0_SCOPE=openid profile read:shows
AUTH0_AUDIENCE={YOUR_AUTH0_API_IDENTIFIER}
```

8. Run `npm run drizzle:migrate` or `bun run drizzle:migrate` to apply the migrations
9. Run `npm run dev` or `bun run dev`
10. Open your browser and go to `http://localhost:3000`
11. Login and play around!
