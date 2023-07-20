"use client";

import React, { useState } from "react";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { PlaceholderTable } from "@/components/PlaceholderTable";
import { getTasksColumn } from "@/components/table/TaskColumns";
import { TasksTable } from "@/components/table/TasksTable";
import { UserTasksFilter } from "@/components/UserTasksFilter";

import { useEmployeesList } from "@/hooks/api/useEmployeesList";
import { useTasksList } from "@/hooks/api/useTasksList";

export default function TasksPage() {
  const { data: tasksList, isLoading, error } = useTasksList();
  const { data: usersList, isLoading: isUserLoading } = useEmployeesList();
  const [data, setData] = useState<Task[]>([]);

  const handleChangeData = (data: Task[]) => {
    setData(data);
  };

  if (error) return <p>Sorry, could not fetch data</p>;

  if (isLoading || isUserLoading) {
    return <PlaceholderTable />;
  }

  if (!usersList || !tasksList) return null;

  const columns = getTasksColumn(usersList);
  const filterProps = {
    usersList,
    tasksList,
    handleChangeData,
  };

  return (
    <section className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
      <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
      <ButtonCreate redirectTo="create-task" text="Create Task" />
      <UserTasksFilter {...filterProps} />
      <TasksTable columns={columns} data={data || []} />
    </section>
  );
}
