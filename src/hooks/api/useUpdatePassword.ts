import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { UpdatePassword } from "@/types/users";

export function useUpdatePassword() {
  return useMutation({
    mutationFn: async (formData: UpdatePassword) => {
      const { data } = await apiClient().patch(`/accounts/change-password`, formData);
      return data;
    },
  });
}
