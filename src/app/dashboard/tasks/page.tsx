"use client";

import type { ChangeEvent } from "react";
import React, { useEffect, useState } from "react";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getTasksColumn } from "@/components/table/TaskColumns";
import { TasksTable } from "@/components/table/TasksTable";

import { useTasksList } from "@/hooks/api/useTasksList";
import { useUserList } from "@/hooks/api/useUserList";

export default function TasksPage() {
  const { data: tasksList, isLoading, error } = useTasksList();
  const [data, setData] = useState<Task[]>([]);
  const { data: usersList, isLoading: isUserLoading } = useUserList();

  useEffect(() => {
    setData(tasksList || []);
  }, [tasksList]);

  if (error) return <p>Sorry, could not fetch data</p>;
  if (isLoading || isUserLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  if (!usersList) return null;

  const columns = getTasksColumn(usersList);

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") return setData(tasksList || []);

    const user = usersList.find((user) => user.id === parseInt(e.target.value));
    setData(tasksList?.filter((task) => task.userId === user?.id) ?? []);
  };

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
      <ButtonCreate redirectTo="create-task" text="Create Task" />
      <select
        className="min-w-[256px] border-b-2 border-gray-400 bg-white p-2 focus:border-blue-700 focus:outline-none"
        onChange={handleUserChange}
      >
        <option value="all" selected>
          All
        </option>
        {usersList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} {user.surname}
          </option>
        ))}
      </select>
      <TasksTable columns={columns} data={data || []} />
    </section>
  );
}
