import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useCompleteTask(taskId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiClient().patch(`/api/tasks/${taskId}/complete`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
}