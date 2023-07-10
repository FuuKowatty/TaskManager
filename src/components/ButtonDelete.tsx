"use client";

import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BiTrash } from "react-icons/bi";

export function ButtonDelete({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const handleDeleteUser = () => {
    axios
      .delete(`/api/getUsers/${id}`)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        queryClient.invalidateQueries({ queryKey: ["team"] });
      });
  };

  return (
    <button onClick={handleDeleteUser} className="flex items-center">
      <BiTrash className="mr-2 h-4 w-4" />
      <span>Delete user</span>
    </button>
  );
}
