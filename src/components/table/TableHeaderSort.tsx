import type { Column } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";


import { Button } from "@/components/ui/button";

export const TableHeaderSort = <T,>(column: Column<T>, text: string) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {text}
      <LuArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};