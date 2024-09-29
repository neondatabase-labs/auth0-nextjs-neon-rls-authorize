import * as schema from "@/app/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

export async function fetchWithDrizzle<T>(
  callback: (
    db: NeonHttpDatabase<typeof schema>,
    { userId, authToken }: { userId: string; authToken: string },
  ) => Promise<T>,
) {
  const session = await getSession();
  if (!session) {
    throw new Error("No session");
  }

  const accessToken = await getAccessToken();
  if (!accessToken.accessToken) {
    throw new Error("No access token");
  }
  const db = drizzle(
    neon(process.env.DATABASE_AUTHENTICATED_URL!, {
      authToken: async () => {
        const accessToken = await getAccessToken();
        if (!accessToken.accessToken) {
          throw new Error("No access token");
        }
        return accessToken.accessToken;
      },
    }),
    { schema },
  );

  return callback(db, {
    userId: session.user.sub,
    authToken: accessToken.accessToken,
  });
}
