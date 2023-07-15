import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";

export function useCreateUser() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormRegister) => {
      return apiClient.post("getUsers", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["team"]);
      router.push("/dashboard/team");
    },
  });
}
