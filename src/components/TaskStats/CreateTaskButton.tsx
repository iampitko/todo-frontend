import { IoIosAddCircleOutline } from "react-icons/io";
import Link from "next/link";

export const CreateTaskButton: React.FC = () => {
  return (
    <Link
      href="/tasks/create"
      className="flex items-center justify-center px-4 py-2 gap-2 absolute top-[-30px] sm:static sm:mt-4 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 w-[90%] max-w-[736px] h-12"
    >
      Create Task
      <IoIosAddCircleOutline size={14} />
    </Link>
  );
};
