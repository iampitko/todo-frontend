import Head from "next/head";
import { Header, TaskForm } from "@/components";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Head>
        <title>Create Task</title>
        <meta
          name="description"
          content="Manage your tasks efficiently with Todo App."
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <TaskForm />
      </main>
    </div>
  );
}
