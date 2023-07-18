import type { ColumnDef } from "@tanstack/table-core";

import { TableHeaderSort } from "@/components/table/TableHeaderSort";
import { Dropdown } from "@/components/table/UserDropdown";

import { HashPasswordInput } from "../hashPasswordInput";

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
    header: ({ column }) => TableHeaderSort(column, "Password"),
    cell: (props) => <HashPasswordInput value={props.getValue() as string} />,
  },
  {
    id: "actions",
    cell: ({ row: { original: userData } }) => {
      return <Dropdown userData={userData} />;
    },
  },
];
