import { useSession } from "@/hooks/state/useSession";

import { ErrorMessage } from "./form/ErrorMessage";
import { LoadingEmployeesContent } from "./ui/LoadingEmployeesContent";
import { useEmployeeTasks } from "@/hooks/api/useEmployeeTasks";
import { Task } from "./Task";
import { TaskStatus } from "@/types/task";

export function ListTasks() {
  const {
    sessionUser: { id },
  } = useSession();
  const { data: userTasks, isLoading, error } = useEmployeeTasks(id);

  if (isLoading) return <LoadingEmployeesContent />;
  if (error) return <ErrorMessage>Could not fetch tasks</ErrorMessage>;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
      <span className="mb-4 shrink-0 text-xl font-bold dark:text-white">
        Your Tasks:
      </span>
      {userTasks?.length ? (
        <div className="flex w-full flex-col items-center overflow-y-auto">
          {userTasks
          .filter(task => task.status === TaskStatus.pending)
          .map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}
