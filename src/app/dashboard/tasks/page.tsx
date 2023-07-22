"use client";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { PlaceholderTable } from "@/components/PlaceholderTable";
import { getTasksColumn } from "@/components/table/TaskColumns";
import { TasksTable } from "@/components/table/TasksTable";
import { UserTasksFilter } from "@/components/UserTasksFilter";

import { useEmployeesList } from "@/hooks/api/useEmployeesList";
import { useTasksList } from "@/hooks/api/useTasksList";
import { useSession } from "@/hooks/state/useSession";

export default function TasksPage() {
  const {
    sessionUser: { role },
  } = useSession();
  const { data: tasksList, isLoading, error } = useTasksList();
  const {
    data: usersList,
    isLoading: isUserLoading,
    error: userError,
  } = useEmployeesList();

  if (error || userError) return <p>Sorry, could not fetch data</p>;

  if (isLoading || isUserLoading) {
    return <PlaceholderTable />;
  }

  return (
    <>
      {tasksList && usersList && (
        <section className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
          <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
          {role !== "employee" && (
            <ButtonCreate redirectTo="create-task" text="Create Task" />
          )}
          <UserTasksFilter usersList={usersList} role={role} />
          <TasksTable columns={getTasksColumn(usersList)} data={tasksList} />
        </section>
      )}
    </>
  );
}
