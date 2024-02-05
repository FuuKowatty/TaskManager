import { LoadingTable } from "@/components/ui/LoadingTable";
import { useTasksList } from "@/hooks/api/useTasksList";
import { useSession } from "@/hooks/state/useSession";
import { TaskTable } from "@/components/table/TaskTable";
import { getTasksColumn } from "@/lib/getTaskColumns";

export function DashboardEmployeeTask() {
  const { sessionUser } = useSession();
  const {
    data: tasksList,
    isLoading: isTasksLoading,
    error: tasksError,
  } = useTasksList();

  if (tasksError) return <p>Sorry, could not fetch data</p>;

  return (
    <>
      {isTasksLoading ? <LoadingTable /> : (        
      <main className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
          <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
          <TaskTable columns={getTasksColumn([sessionUser])} data={tasksList?? []} />
        </main>)}
    </>
  );
}