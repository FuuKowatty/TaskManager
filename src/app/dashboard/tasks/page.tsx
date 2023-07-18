"use client";

import type { ChangeEvent } from "react";
import React, { useEffect, useState } from "react";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getTasksColumn } from "@/components/table/TaskColumns";
import { TasksTable } from "@/components/table/TasksTable";

import { useTasksList } from "@/hooks/api/useTasksList";
import { useUserList } from "@/hooks/api/useUserList";
import { useActiveTaskFilter } from "@/state/useActiveTaskFilter";

export default function TasksPage() {
  const { data: tasksList, isLoading, error } = useTasksList();
  const { data: usersList, isLoading: isUserLoading } = useUserList();
  const { activeTaskFilter, setActiveTaskFilter } = useActiveTaskFilter();

  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const filterTasksByActiveUser = () => {
      if (!activeTaskFilter) return setData(tasksList || []);

      const user = usersList?.find((user) => user.id === activeTaskFilter);
      if (!user) return setData([]);

      setData(tasksList?.filter((task) => task.userId === user?.id) as Task[]);
    };

    filterTasksByActiveUser();
  }, [activeTaskFilter, tasksList, usersList]);

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveTaskFilter(parseInt(e.target.value));
  };

  if (error) return <p>Sorry, could not fetch data</p>;
  if (isLoading || isUserLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (!usersList) return null;

  const columns = getTasksColumn(usersList);

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
      <ButtonCreate redirectTo="create-task" text="Create Task" />
      <select
        className="min-w-[256px] border-b-2 border-gray-400 bg-white p-2 text-black focus:border-blue-700 focus:outline-none"
        onChange={handleUserChange}
      >
        <option value={0} selected={!activeTaskFilter}>
          All
        </option>
        {usersList.map((user) => (
          <option
            key={user.id}
            value={user.id}
            selected={activeTaskFilter === user.id}
          >
            {user.name} {user.surname}
          </option>
        ))}
      </select>
      <TasksTable columns={columns} data={data || []} />
    </section>
  );
}
