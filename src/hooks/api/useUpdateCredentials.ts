import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUpdateCredentials(userId: number) {
  return useMutation({
    mutationFn: async (formData: { password: string } | { email: string }) => {
      const { data } = await apiClient.patch(`users/${userId}`, formData);
      return data;
    },
  });
}
