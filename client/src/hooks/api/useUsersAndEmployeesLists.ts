import { useQueries } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { getTasksList } from "@/lib/getTasksList";

import type { User } from "@/types/users";

import { useActiveTaskFilter } from "../state/useActiveTaskFilter";

export function useUsersAndEmployeesLists() {
  const { activeTaskFilter } = useActiveTaskFilter();

  return useQueries({
    queries: [
      {
        queryKey: ["tasks", activeTaskFilter],
        queryFn: async () => {
          const { data } = await getTasksList(activeTaskFilter);
          return data;
        },
      },
      {
        queryKey: ["team"],
        queryFn: async () => {
          const { data } = await apiClient.get<User[]>(`users?role=employee`);
          return data;
        },
      },
    ],
  });
}
