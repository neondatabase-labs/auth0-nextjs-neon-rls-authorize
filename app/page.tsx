import { AddTodoForm } from "@/app/add-todo";
import { Header } from "@/app/header";
import { TodoList } from "@/app/todo-list";
import { getSession } from "@auth0/nextjs-auth0";

import styles from "../styles/Home.module.css";

export default async function Home() {
  const session = await getSession();

  let content = null;
  if (session) {
    content = (
      <main className={styles.main}>
        <div className={styles.container}>
          <AddTodoForm />
          <TodoList />
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
}
