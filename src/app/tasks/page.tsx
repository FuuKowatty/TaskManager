"use client";

import { useQuery } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BsPersonFillAdd } from "react-icons/bs";

import { TableHeaderSort } from "@/components/TableHeaderSort";
import { TasksTable } from "@/components/TasksTable";

import { useSession } from "@/state/useSession";

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
  const { sessionUser } = useSession();
  const { data } = useQuery({
    queryKey: ["tasks", sessionUser?.id],
    queryFn: async () => {
      const role = sessionUser?.role;
      const url =
        role === "manager" || role === "admin" ? "/" : `/${sessionUser?.id}`;
      const { data } = await axios.get<Task[]>(url);

      return data;
    },
    enabled: Boolean(sessionUser?.id),
  });

  if (!data) {
    return null;
  }

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 font-golos-text text-5xl">Tasks</h2>
      <button
        className="absolute right-0 top-0 flex w-[162px] items-center justify-center gap-1 rounded-md bg-blue-700 p-2 font-bold text-white hover:bg-blue-800"
        onClick={() => router.push("create-user")}
      >
        <BsPersonFillAdd color="white" />
        Create Task
      </button>
      <TasksTable columns={columns} data={data} />
    </section>
  );
}
