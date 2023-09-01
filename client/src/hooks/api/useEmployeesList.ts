import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { User } from "@/types/users";

export function useEmployeesList() {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await apiClient.get<User[]>(`users?role=employee`);
      return data;
    },
  });
}
