"use client";

import React from "react";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getTasksColumn } from "@/components/table/TaskColumns";
import { TasksTable } from "@/components/table/TasksTable";

import { useTasksList } from "@/hooks/api/useTasksList";
import { useUserList } from "@/hooks/api/useUserList";

export default function TasksPage() {
  const { data, isLoading, error } = useTasksList();
  const { data: usersList, isLoading: isUserLoading } = useUserList();

  if (error) return <p>Sorry, could not fetch data</p>;
  if (isLoading || isUserLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  if (!usersList) return null;

  const columns = getTasksColumn(usersList);

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
      <ButtonCreate redirectTo="create-task" text="Create Task" />
      <TasksTable columns={columns} data={data || []} />
    </section>
  );
}
