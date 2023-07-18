import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUser(userId: number) {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await apiClient.get<User[]>(`getUsers/${userId}`);
      return data;
    },
  });
}
