import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useSession } from "@/state/useSession";

export function useUpdateTaskStatus(taskId: number) {
  const { sessionUser } = useSession();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiClient.get(`updateTask/${taskId}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["tasks", sessionUser.id]);
    },
  });
}
