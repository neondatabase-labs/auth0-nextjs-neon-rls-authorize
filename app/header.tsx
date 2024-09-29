"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "../styles/Home.module.css";

export function Header() {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <div>My Todo App</div>
      {user ? (
        <>
          {user.picture ? (
            <img src={user.picture} style={{ width: 40, borderRadius: 20 }} />
          ) : null}
          <a href="/api/auth/logout">Logout</a>
        </>
      ) : (
        <>
          <a href="/api/auth/login">Login or Sign Up</a>
        </>
      )}
    </header>
  );
}
