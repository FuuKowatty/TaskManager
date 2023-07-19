import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

type UpdateUser = User | { email: string } | { password: string };

export function useUpdateUser(userId: number, closeModal?: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: UpdateUser) => {
      apiClient.post(`getUsers/${userId}`, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
      closeModal && closeModal();
    },
  });
}
