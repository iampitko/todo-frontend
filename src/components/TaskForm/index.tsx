"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { taskColors } from "./data";

export const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, color }),
      });

      if (!res.ok) {
        throw new Error("Failed to create task");
      }

      alert("Task created successfully!");
      setTitle("");
      setColor("#FF3B30");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="relative p-4 rounded-lg w-[90%] max-w-[736px] mx-auto">
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 text-white hover:text-gray-900"
      >
        <FaArrowLeft size={20} />
      </button>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-16 flex flex-col justify-center items-center"
      >
        <div className="w-full">
          <label className="block text-sm font-medium mb-2 text-[#4EA8DE]">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="w-full p-3 rounded bg-[#333333] text-[#F2F2F2] placeholder-[#F2F2F2] focus:outline-none"
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium mb-2 text-[#4EA8DE]">
            Color
          </label>
          <div className="flex flex-wrap gap-2 justify-start">
            {taskColors.map((colorValue) => (
              <button
                key={colorValue}
                type="button"
                onClick={() => setColor(colorValue)}
                className={`w-8 h-8 rounded-full focus:outline-none sm:w-12 sm:h-12 ${
                  color === colorValue
                    ? "ring-4 ring-offset-2 ring-[#4EA8DE]"
                    : ""
                }`}
                style={{ backgroundColor: colorValue }}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center px-6 py-3 gap-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 w-[90%] max-w-[736px] h-14 sm:w-[90%] sm:h-12"
        >
          Add Task
          <IoIosAddCircleOutline size={16} />
        </button>
      </form>
    </div>
  );
};
