"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { BsPersonFillAdd } from "react-icons/bs";

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
  const router = useRouter();
  const { data, isLoading, error } = useTasksList();

  if (error) return <p>Sorry could not data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 text-5xl font-bold">Tasks</h2>
      <button
        className="absolute right-0 top-0 flex w-[162px] items-center justify-center gap-1 rounded-md bg-blue-700 p-2 font-bold text-white hover:bg-blue-800"
        onClick={() => router.push("create-task")}
      >
        <BsPersonFillAdd color="white" />
        Create Task
      </button>
      <TasksTable columns={columns} data={data || []} />
    </section>
  );
}
