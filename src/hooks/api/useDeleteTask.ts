import { useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useDeleteTask(id: number, closeModal: () => void) {
  const queryClient = useQueryClient();

  const handleDeleteTask = async () => {
    try {
      await apiClient.delete(`/getTasks/${id}`);
      queryClient.invalidateQueries({ queryKey: ["team"] });
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  return handleDeleteTask;
}
