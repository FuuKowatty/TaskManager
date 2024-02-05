import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { FormUpdate } from "@/types/users";

export function useUpdateUser(userId: number, closeModal?: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: FormUpdate) => {
      const { data } = await apiClient().put(`/api/users/${userId}`, formData);
      return data;
    },
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
      queryClient.invalidateQueries(["team"]);
    },
    onSuccess: () => {
      closeModal && closeModal();
    }
  });
}
