import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { User } from "@/types/users";

type UpdateUser = User | { email: string } | { password: string };

export function useUpdateUser(userId: number, closeModal?: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: UpdateUser): Promise<User> => {
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
