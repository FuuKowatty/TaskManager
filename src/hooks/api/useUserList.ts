import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { User } from "@/types/users";

export function useUserList() {
  return useQuery({
    queryKey: ["team", "admins"],
    queryFn: async () => {
      const { data } = await apiClient().get<User[]>(`/api/users`);
      return data;
    },
  });
}