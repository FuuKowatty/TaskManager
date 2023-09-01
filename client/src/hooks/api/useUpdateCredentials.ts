import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { UserCredentials } from "@/types/users";

export function useUpdateCredentials(userId: number) {
  return useMutation({
    mutationFn: async (formData: UserCredentials) => {
      const { data } = await apiClient.patch(`users/${userId}`, formData);
      return data;
    },
  });
}
