import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingTable } from "@/components/ui/LoadingTable";
import { useEmployeesList } from "@/hooks/api/useEmployeesList";

import { useTasksList } from "@/hooks/api/useTasksList";
import { useSession } from "@/hooks/state/useSession";
import { Role } from "@/types/users";
import { UserTasksFilter } from "@/components/table/UserTasksFilter";
import { TaskTable } from "@/components/table/TaskTable";
import { getTasksColumn } from "@/lib/getTaskColumns";

export function DashboardAdminTask() {
  const { sessionUser } = useSession();
  const {
    data: tasksList,
    isLoading: isTasksLoading,
    error: tasksError,
  } = useTasksList();

  const {
    data: usersList,
    isLoading: isUserLoading,
    error: userError,
  } = useEmployeesList();

  if (tasksError || userError) return <p>Sorry, could not fetch data</p>;

  return (
    <>
      {isTasksLoading || isUserLoading ? <LoadingTable /> : (        
      <main className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
          <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
          {sessionUser.role !== Role.employee && ((
            <>
              <ButtonCreate redirectTo="create-task">Create Task</ButtonCreate>
              <UserTasksFilter usersList={usersList ?? []} role={sessionUser.role}/>
            </>
          ))}
          <TaskTable columns={getTasksColumn(usersList ?? [])} data={tasksList?? []} />
        </main>)}
    </>
  );
}