import { CgNotes } from "react-icons/cg";
import TaskCard from "@/components/TaskList/TaskCard";
import { Task } from "../types";

export const TaskList: React.FC<{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ tasks, setTasks }) => {
  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  if (tasks.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center h-[60vh] text-[#808080]">
        <CgNotes size={64} />
        <p className="mt-4 font-bold text-lg text-center">
          You don&apos;t have any tasks registered yet.
        </p>
        <p className="mt-2 text-center">
          Create tasks and organize your to-do items.
        </p>
      </section>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4"></div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            setTasks={setTasks}
          />
        ))}
      </div>
    </section>
  );
};
