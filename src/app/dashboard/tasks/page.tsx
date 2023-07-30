"use client";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { ErrorMessage } from "@/components/form/ErrorMessage";
import { getTasksColumn } from "@/components/table/TaskColumns";
import { TasksTable } from "@/components/table/TasksTable";
import { UserTasksFilter } from "@/components/table/UserTasksFilter";
import { LoadingTable } from "@/components/ui/LoadingTable";

import { useUsersAndEmployeesLists } from "@/hooks/api/useUsersAndEmployeesLists";
import { useSession } from "@/hooks/state/useSession";

export default function TasksPage() {
  const {
    sessionUser: { role },
  } = useSession();

  const [
    { status: tasksStatus, data: tasksList },
    { status: usersStatus, data: usersList },
  ] = useUsersAndEmployeesLists();

  if (tasksStatus === "loading" || usersStatus === "loading")
    return <LoadingTable />;

  if (tasksStatus === "error" || usersStatus === "error")
    return <ErrorMessage error="Could not fetch tasks" />;

  return (
    <>
      {tasksList && usersList && (
        <section className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
          <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
          {role !== "employee" && (
            <ButtonCreate redirectTo="create-task">Create Task</ButtonCreate>
          )}
          <UserTasksFilter usersList={usersList} role={role} />
          <TasksTable columns={getTasksColumn(usersList)} data={tasksList} />
        </section>
      )}
    </>
  );
}
