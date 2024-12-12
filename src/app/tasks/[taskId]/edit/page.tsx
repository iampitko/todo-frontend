import Head from "next/head";
import { Header, TaskEditForm } from "@/components";

export default function EditTaskPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Head>
        <title>Edit Task</title>
        <meta
          name="description"
          content="Edit your tasks efficiently with Todo App."
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <TaskEditForm />
      </main>
    </div>
  );
}
