import { useQuery } from "@tanstack/react-query";

import { Role, type User } from "@/types/users";
import { filterByRole } from "@/lib/filterByRole";
import { apiClient } from "@/lib/apiClient";

export function useEmployeesList() {

  return useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await apiClient().get<User[]>(`/api/users`);
      const users: User[] = filterByRole(data, Role.employee)
      return users;
    },
  });
}