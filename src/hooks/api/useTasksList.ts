import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useActiveTaskFilter } from "../state/useActiveTaskFilter";

export function useTasksList() {
  const { activeTaskFilter } = useActiveTaskFilter();
  return useQuery({
    queryKey: ["tasks", activeTaskFilter],
    queryFn: async () => {
      const urlEnd = activeTaskFilter ? `/${activeTaskFilter ?? ""}` : "";

      const { data } = await apiClient.get<Task[]>(`getTasks${urlEnd}`);
      return data;
    },
  });
}
