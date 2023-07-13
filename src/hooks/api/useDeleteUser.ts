import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useDeleteUser(id: number) {
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

  return handleDeleteUser;
}
