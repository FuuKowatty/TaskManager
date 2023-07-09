"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export function Button({ id }: { id: number }) {
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

  return <button onClick={handleDeleteUser}>Delete Me</button>;
}
