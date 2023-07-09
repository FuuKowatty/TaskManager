"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { BiTrash } from "react-icons/bi";

export function ButtonDelete({ id }: { id: number }) {
  const router = useRouter();
  const handleDeleteUser = () => {
    axios
      .delete(`/api/getUsers/${id}`)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
      });
  };

  return (
    <button onClick={handleDeleteUser} className="flex items-center">
      <BiTrash className="mr-2 h-4 w-4" />
      <span>Delete user</span>
    </button>
  );
}
