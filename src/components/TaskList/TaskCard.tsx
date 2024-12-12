"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ITaskCard } from "../types";
import { MdDone } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function TaskCard({ task, onDelete, setTasks }: ITaskCard) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const router = useRouter();

  const toggleCompletion = async () => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !isCompleted }),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTask = await response.json();
      setIsCompleted(updatedTask.completed);

      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update task");
    }
  };

  const deleteTask = async () => {
    if (confirm("Are you sure you want to delete this task?")) {
      await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: "DELETE",
      });
      onDelete(task.id);
    }
  };

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-md w-[90%] max-w-3xl bg-[#262626] border-[1px] border-[#333333] mx-auto cursor-pointer hover:shadow-lg transition-all ${task.color}`}
      onClick={() => router.push(`/tasks/${task.id}/edit`)}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer mr-4 ${
          isCompleted ? "bg-current text-white" : ""
        }`}
        style={{
          borderColor: isCompleted ? task.color : "#333333",
          backgroundColor: isCompleted ? task.color : "transparent",
        }}
        onClick={(e) => {
          e.stopPropagation();
          toggleCompletion();
        }}
      >
        {isCompleted && <MdDone />}
      </div>
      <div>
        <h3
          className={`text-lg ${
            isCompleted ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {task.title}
        </h3>
      </div>
      <div className="flex space-x-4 items-center ml-auto">
        <RiDeleteBin5Line
          onClick={(e) => {
            e.stopPropagation();
            deleteTask();
          }}
          className="text-gray-500 hover:text-red-500 cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
}
