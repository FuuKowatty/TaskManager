import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { User } from "@/types/users";

export function useUser(userId: number) {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await apiClient.get<User>(`users/${userId}`);
      return data;
    },
  });
}
