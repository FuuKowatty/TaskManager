import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";

export function useUpdateTask(taskId: number, closeModal: () => void) {
  const { activeTaskFilter } = useActiveTaskFilter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormAddTask) => {
      return apiClient.post(`/updateTask/${taskId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks", activeTaskFilter]);
    },
    onSettled: closeModal,
  });
}
