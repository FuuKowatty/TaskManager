import type { ColumnDef } from "@tanstack/table-core";
import Link from "next/link";
import { BiDotsVerticalRounded, BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

import { ButtonDelete } from "@/components/ButtonDelete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "surname",
    header: "Surname",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    id: "actions",
    cell: ({
      row: {
        original: { surname, name, id },
      },
    }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <BiDotsVerticalRounded className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>{`${name} ${surname}`}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`/tasks/${id}`}>
              <DropdownMenuItem>
                <BsEye className="mr-2 h-4 w-4" />
                <span>Show tasks</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:bg-red-300">
              <ButtonDelete id={id} />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BiEdit className="mr-2 h-4 w-4" />
              <span>Edit user</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
