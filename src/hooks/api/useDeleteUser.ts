import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useDeleteUser(id: number, closeModal: () => void) {
  const queryClient = useQueryClient();
  const handleDeleteUser = () => {
    axios.delete(`/api/getUsers/${id}`).finally(() => {
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["team"] });
    });
  };

  return handleDeleteUser;
}
