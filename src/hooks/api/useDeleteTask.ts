import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";

export function useDeleteTask(taskId: number, closeModal: () => void) {
  const { activeTaskFilter } = useActiveTaskFilter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return apiClient().delete(`/api/tasks/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["tasks", activeTaskFilter]});
    },
    onSettled: closeModal,
  });
}