import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useDeleteUser(userId: number, closeModal: () => void) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: () => {
      return apiClient.delete(`/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
    onSettled: closeModal,
  });

  return deleteMutation;
}
