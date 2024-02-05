import { useQuery } from "@tanstack/react-query";

import { getTasksList } from "@/lib/getTasksList";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";

export function useTasksList() {
  const { activeTaskFilter } = useActiveTaskFilter();

  return useQuery({
    queryKey: ["tasks", activeTaskFilter],
    queryFn: async () => {
      const { data } = await getTasksList(activeTaskFilter);
      return data;
    },
  });
}