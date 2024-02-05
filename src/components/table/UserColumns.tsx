import type { ColumnDef } from "@tanstack/table-core";

import { TableHeaderSort } from "@/components/table/TableHeaderSort";
import { UserDropdown } from "@/components/table/UserDropdown";

import type { User } from "@/types/users";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => TableHeaderSort(column, "name"),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => TableHeaderSort(column, "surname"),
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
      return <UserDropdown userData={userData} />;
    },
  },
];
