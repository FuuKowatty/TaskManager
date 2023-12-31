import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";

import type { FormAddTask } from "@/types/task";

export function useCreateTask() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormAddTask) => {
      return apiClient.post("tasks", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      router.push("/dashboard/tasks");
    },
  });
}
