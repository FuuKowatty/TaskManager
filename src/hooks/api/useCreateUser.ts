import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { FormRegister } from "@/types/users";
import { useNavigate } from "react-router-dom";

export function useCreateUser() {
  const router = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormRegister) => {
      return apiClient().post("/api/users", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["team"]);
      router("/dashboard/team");
    },
  });
}
