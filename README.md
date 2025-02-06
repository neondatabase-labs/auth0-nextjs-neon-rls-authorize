<img width="250px" src="https://neon.tech/brand/neon-logo-dark-color.svg" />

# Neon RLS Authorize + Auth0 Example (SQL from the Backend)

A quick start Next.js template demonstrating secure user authentication and authorization using Neon RLS Authorize with Auth0 integration. This guide primarily uses SQL from the backend to enforce row-level security policies.

## Features

- Next.js application with TypeScript
- User authentication powered by Auth0
- Row-level security using Neon RLS Authorize
- Database migrations with Drizzle ORM
- Ready-to-deploy configuration for Vercel, Netlify, and Render

## Prerequisites

- [Neon](https://neon.tech) account with a new project
- [Auth0](https://auth0.com) account with a new application
- Node.js 18+ installed locally

## One-Click Deploy

Deploy directly to your preferred hosting platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/neondatabase-labs/auth0-nextjs-neon-rls-authorize&env=DATABASE_URL,DATABASE_AUTHENTICATED_URL,AUTH0_SECRET,AUTH0_ISSUER_BASE_URL,AUTH0_BASE_URL,AUTH0_CLIENT_ID,AUTH0_CLIENT_SECRET,AUTH0_SCOPE,AUTH0_AUDIENCE&project-name=neon-rls-authorize-auth0&repository-name=neon-rls-authorize-auth0)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/neondatabase-labs/auth0-nextjs-neon-rls-authorize)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/neondatabase-labs/auth0-nextjs-neon-rls-authorize)

> **Important**: After deployment, set `AUTH0_BASE_URL` to your deployment URL and ensure the "Callback URLs" and "Logout URLs" in your Auth0 application settings are correctly configured for your deployment URL.

## Local Development Setup

### 1. Configure Auth0

1. Navigate to your Auth0 dashboard and select your application.
2. Under "Application URIs", configure:
   - **Callback URLs**: `http://localhost:3000/api/auth/callback`
   - **Logout URLs**: `http://localhost:3000`

![Auth0 Application Settings](/images/auth0-application-settings.png)

### 2. Set Up Neon RLS Authorize

1. Open your Neon Console and click "RLS Authorize" in your project's settings
2. Add a new authentication provider
3. Set the JWKS URL to: `https://{YOUR_AUTH0_DOMAIN}/.well-known/jwks.json`
   > Replace `{YOUR_AUTH0_DOMAIN}` with your Auth0 domain.

![Neon RLS Authorize Add Auth Provider](/images/neon-authorize-add-auth-provider.png)

### 3. Local Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/neondatabase-labs/auth0-nextjs-neon-rls-authorize
   cd auth0-nextjs-neon-rls-authorize
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file with the following variables:

   ```env
   # For the `neondb_owner` role.
   DATABASE_URL=
   # For the `authenticated`, passwordless role.
   DATABASE_AUTHENTICATED_URL=

   AUTH0_SECRET={ANY SECRET UNIQUE STRING} (at least 32 characters, used to encrypt the cookie - use `openssl rand -base64 32`)
   AUTH0_ISSUER_BASE_URL=https://{YOUR_AUTH0_DOMAIN}
   AUTH0_BASE_URL=http://localhost:3000/
   AUTH0_CLIENT_ID={YOUR_AUTH0_CLIENT_ID}
   AUTH0_CLIENT_SECRET={YOUR_AUTH0_CLIENT_SECRET}
   AUTH0_SCOPE=openid profile read:shows
   AUTH0_AUDIENCE={YOUR_AUTH0_API_IDENTIFIER}
   ```

   > Get your Auth0 credentials from your Auth0 application settings. You can create a new API in the "APIs" section of your Auth0 dashboard to get the `AUTH0_API_IDENTIFIER`.

4. Set up the database:

   ```bash
   npm run drizzle:generate  # Generate migrations
   npm run drizzle:migrate  # Apply migrations
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` to see the application running

![Neon RLS Authorize + Auth0 Example](/images/neon-authorize-auth0-example.png)

## Learn More

- [Neon RLS Authorize Tutorial](https://neon.tech/docs/guides/neon-authorize-tutorial)
- [Simplify RLS with Drizzle](https://neon.tech/docs/guides/neon-authorize-drizzle)
- [Auth0 Docs](https://auth0.com/docs)
- [Auth0 + Neon RLS Authorize](https://neon.tech/docs/guides/neon-authorize-auth0)

## Authors

- [David Gomes](https://github.com/davidgomes)
- [Pedro Figueiredo](https://github.com/pffigueiredo)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
