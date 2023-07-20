import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";
import { getErrorMessage } from "@/lib/getErrorMessage";

export function useCreateUser() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: handleCreateUser, error: createError } = useMutation({
    mutationFn: (data: FormRegister) => {
      return apiClient.post("getUsers", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["team"]);
      router.push("/dashboard/team");
    },
  });

  return {
    handleCreateUser,
    createError: getErrorMessage(createError),
  };
}
