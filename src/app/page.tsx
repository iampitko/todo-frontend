"use client";
import Head from "next/head";
import { Header, TaskList, TaskStats } from "@/components";
import { useState, useEffect } from "react";
import { Task } from "@/components/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3001/tasks");
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Head>
        <title>Todo App</title>
        <meta
          name="description"
          content="Manage your tasks efficiently with Todo App."
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <TaskStats tasks={tasks} loading={loading} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
