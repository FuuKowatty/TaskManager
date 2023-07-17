"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { TableHeaderSort } from "@/components/table/TableHeaderSort";
import { TasksTable } from "@/components/table/TasksTable";

import { useTasksList } from "@/hooks/api/useTasksList";

function CellFormattedDate(value: string) {
  const date = new Date(value);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "medium",
    hour12: false,
  }).format(date);

  return formattedDate;
}

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => TableHeaderSort(column, "Title"),
  },
  {
    accessorKey: "description",
    header: ({ column }) => TableHeaderSort(column, "Description"),
  },
  {
    accessorKey: "isCompleted",
    header: ({ column }) => TableHeaderSort(column, "Progress"),
    cell: (row) => {
      const progress = row.getValue();
      return progress === "true" ? "Completed" : "Pending";
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => TableHeaderSort(column, "Start Date"),
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return CellFormattedDate(value);
    },
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => TableHeaderSort(column, "End Date"),
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return CellFormattedDate(value);
    },
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
