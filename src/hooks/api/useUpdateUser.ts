import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { FormRegister } from "@/types/users";

export function useUpdateUser(userId: number, closeModal?: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: FormRegister) => {
      const { data } = await apiClient.put(`users/${userId}`, formData);
      return data;
    },
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
      queryClient.invalidateQueries(["team"]);
      closeModal && closeModal();
    },
  });
}
