import type { ColumnDef } from "@tanstack/table-core";

import { TableHeaderSort } from "@/components/table/TableHeaderSort";

import { formatDate } from "@/lib/formatDate";
import { getEmployeeFullNameById } from "@/lib/getEmployeeByName";

import type { Task } from "@/types/task";
import type { User } from "@/types/users";

import { TaskDropdown } from "./TaskDropdown";

export function getTasksColumn(usersList: User[]) {
  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => TableHeaderSort(column, "Title"),
    },
    {
      accessorKey: "isCompleted",
      header: ({ column }) => TableHeaderSort(column, "Status"),
      cell: (props) => (props.getValue() ? "Completed" : "Pending"),
    },
    {
      accessorKey: "userId",
      header: ({ column }) => TableHeaderSort(column, "Assigned To"),
      cell: (props) =>
        getEmployeeFullNameById(usersList, props.getValue() as number),
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => TableHeaderSort(column, "Start date"),
      cell: (props) => <time>{formatDate(props.getValue() as string)}</time>,
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => TableHeaderSort(column, "End date"),
      cell: (props) => <time>{formatDate(props.getValue() as string)}</time>,
    },
    {
      id: "actions",
      cell: ({ row: { original: taskData } }) => (
        <TaskDropdown
          assignedTo={getEmployeeFullNameById(usersList, taskData.userId)}
          taskData={taskData}
        />
      ),
    },
  ];

  return columns;
}
