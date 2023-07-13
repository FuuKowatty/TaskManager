"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export function ButtonTask({ id }: { id: number }) {
  const router = useRouter();
  const handleDeleteTask = () => {
    axios
      .delete(`/api/getTasks/${id}`)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
      });
  };

  return <button onClick={handleDeleteTask}>Delete Me</button>;
}
