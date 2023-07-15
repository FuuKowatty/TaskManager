import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUpdateUser(userId: number, closeModal: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: User) => {
      apiClient.post(`getUsers/${userId}`, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["team"]);
      closeModal();
    },
  });
}
