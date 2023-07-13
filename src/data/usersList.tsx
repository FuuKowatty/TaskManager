"use client";

import type { Column, ColumnDef } from "@tanstack/table-core";
import { ArrowUpDown } from "lucide-react";

import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/ui/button";

const HeaderWithSort = (column: Column<User>, text: string) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {text}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => HeaderWithSort(column, "Name"),
  },
  {
    accessorKey: "surname",
    header: ({ column }) => HeaderWithSort(column, "Surname"),
  },
  {
    accessorKey: "email",
    header: ({ column }) => HeaderWithSort(column, "Email"),
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
