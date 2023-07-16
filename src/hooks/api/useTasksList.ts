import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useSession } from "@/state/useSession";

export function useTasksList() {
  const { sessionUser } = useSession();
  return useQuery({
    queryKey: ["tasks", sessionUser.id],
    queryFn: async () => {
      const role = sessionUser.role;
      const isRoleCorrect = role === "manager" || role === "admin";
      const urlEnd = isRoleCorrect ? "/" : `/${sessionUser.id}`;

      const { data } = await apiClient.get<Task[]>(`getTasks${urlEnd}`);
      return data;
    },
    enabled: Boolean(sessionUser.id),
  });
}
