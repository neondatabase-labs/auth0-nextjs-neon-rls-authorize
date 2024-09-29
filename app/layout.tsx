import { UserProvider } from "@auth0/nextjs-auth0/client";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <UserProvider>
        <body className={`min-h-screen flex flex-col antialiased`}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
