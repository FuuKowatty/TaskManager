import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { User } from "@/types/users";

export function useUsersList() {
  return useQuery({
    queryKey: ["team", "admins"],
    queryFn: async () => {
      const { data } = await apiClient.get<User[]>(`getUsers`);
      return data;
    },
  });
}
