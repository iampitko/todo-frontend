import { CreateTaskButton } from "./CreateTaskButton";
import { Task } from "../types";

export const TaskStats: React.FC<{ tasks: Task[]; loading: boolean }> = ({
  tasks,
  loading,
}) => {
  const completedCount = tasks.filter((task) => task.completed).length;

  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading tasks...</p>;
  }

  return (
    <section className="mt-4 relative flex flex-col items-center">
      <CreateTaskButton />

      <div className="flex justify-between w-full max-w-[736px] mt-16 sm:mt-8 px-4">
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-[#4EA8DE]">Tasks</p>
          <div className="flex items-center justify-center w-8 h-8 bg-[#333] rounded-full">
            <span className="text-white text-sm font-bold">{tasks.length}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-[#8284FA]">Completed</p>
          <div className="flex items-center justify-center w-8 h-8 bg-[#333] rounded-full">
            <span className="text-white text-sm font-bold">
              {completedCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
