import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";
import type { Task } from "@/types/task";

export function useUpdateTask(taskId: number, closeModal: () => void) {
  const { activeTaskFilter } = useActiveTaskFilter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Task) => {
      return apiClient.put(`/tasks/${taskId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks", activeTaskFilter]);
    },
    onSettled: closeModal,
  });
}
