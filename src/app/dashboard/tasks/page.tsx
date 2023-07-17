"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { TableHeaderSort } from "@/components/table/TableHeaderSort";
import { TasksTable } from "@/components/table/TasksTable";

import { useTasksList } from "@/hooks/api/useTasksList";

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => TableHeaderSort(column, "Id"),
  },
  {
    accessorKey: "title",
    header: ({ column }) => TableHeaderSort(column, "Title"),
  },
  {
    accessorKey: "description",
    header: ({ column }) => TableHeaderSort(column, "Description"),
  },
  {
    accessorKey: "is completed",
    header: ({ column }) => TableHeaderSort(column, "Is completed"),
  },
  {
    accessorKey: "start date",
    header: ({ column }) => TableHeaderSort(column, "Start date"),
  },
  {
    accessorKey: "end date",
    header: ({ column }) => TableHeaderSort(column, "End date"),
  },
];

export default function TasksPage() {
  const { data, isLoading, error } = useTasksList();

  if (error) return <p>Sorry could not data</p>;
  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
      <ButtonCreate redirectTo="create-task" text="Create Task" />
      <TasksTable columns={columns} data={data || []} />
    </section>
  );
}
