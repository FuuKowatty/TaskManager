import type { ColumnDef } from "@tanstack/table-core";

import { Dropdown } from "@/components/table/Dropdown";
import { TableHeaderSort } from "@/components/table/TableHeaderSort";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => TableHeaderSort(column, "Name"),
  },
  {
    accessorKey: "surname",
    header: ({ column }) => TableHeaderSort(column, "Surname"),
  },
  {
    accessorKey: "email",
    header: ({ column }) => TableHeaderSort(column, "Email"),
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    id: "actions",
    cell: ({ row: { original: userData } }) => {
      return <Dropdown userData={userData} />;
    },
  },
];
