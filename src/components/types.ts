export interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

export interface ITaskCard {
  task: Task;
  onDelete: (taskId: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
