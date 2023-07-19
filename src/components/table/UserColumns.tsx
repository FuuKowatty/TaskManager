import type { ColumnDef } from "@tanstack/table-core";

import { TableHeaderSort } from "@/components/table/TableHeaderSort";
import { Dropdown } from "@/components/table/UserDropdown";

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
    accessorKey: "role",
    header: ({ column }) => TableHeaderSort(column, "Role"),
  },
  {
    id: "actions",
    cell: ({ row: { original: userData } }) => {
      return <Dropdown userData={userData} />;
    },
  },
];
