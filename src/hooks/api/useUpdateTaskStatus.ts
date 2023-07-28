import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUpdateTaskStatus(taskId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiClient.patch(`tasks/${taskId}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      queryClient.invalidateQueries(["incompleted-tasks-user"]);
    },
  });
}
