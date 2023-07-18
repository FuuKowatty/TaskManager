import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUpdateTask(taskId: number, closeModal: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: FormAddTask) => {
      apiClient.post(`/updateTask/${taskId}`, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
      closeModal();
    },
  });
}
