import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUsersList() {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await apiClient.get<User[]>(`getUsers`);
      return data;
    },
  });
}
