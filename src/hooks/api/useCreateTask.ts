import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { FormAddTask } from "@/types/task";
import { useNavigate } from "react-router-dom";

export function useCreateTask() {
  const router = useNavigate();
  return useMutation({
    mutationFn: (data: FormAddTask) => {
      return apiClient().post("/api/tasks", data);
    },
    onSuccess: () => {
      router("/dashboard/tasks");
    },
  });
}