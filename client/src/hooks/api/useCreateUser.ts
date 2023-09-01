import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";

import type { FormRegister } from "@/types/users";

export function useCreateUser() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormRegister) => {
      return apiClient.post("users", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["team"]);
      router.push("/dashboard/team");
    },
  });
}
