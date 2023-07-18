import type { ColumnDef } from "@tanstack/table-core";

import { TableHeaderSort } from "@/components/table/TableHeaderSort";

import { formatDate } from "@/lib/formatDate";

import { TaskDropdown } from "./TaskDropdown";

export function getTasksColumn(usersList: User[]) {
  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => TableHeaderSort(column, "Title"),
    },
    {
      accessorKey: "isCompleted",
      header: ({ column }) => TableHeaderSort(column, "Progress"),
      cell: (props) => (props.getValue() ? "Completed" : "Pending"),
    },
    {
      accessorKey: "userId",
      header: ({ column }) => TableHeaderSort(column, "Assigned To"),
      cell: (props) => {
        const userData = usersList.find(
          (user) => user.id === props.getValue()
        ) as User;
        return `${userData.name} ${userData.surname}`;
      },
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => TableHeaderSort(column, "Start date"),
      cell: (props) => formatDate(props.getValue() as string),
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => TableHeaderSort(column, "End date"),
      cell: (props) => formatDate(props.getValue() as string),
    },
    {
      id: "actions",
      cell: ({ row: { original: taskData } }) => (
        <TaskDropdown taskData={taskData} />
      ),
    },
  ];

  return columns;
}
