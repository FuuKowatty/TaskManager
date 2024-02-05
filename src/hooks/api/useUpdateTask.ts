import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { Task } from "@/types/task";

export function useUpdateTask(taskId: number, closeModal: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Task) => {
      return apiClient().put(`/api/tasks/${taskId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      closeModal();
    },
  });
}