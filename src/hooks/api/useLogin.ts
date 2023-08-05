import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";

import { useSession } from "@/hooks/state/useSession";
import type { FormLogin, User } from "@/types/users";

import { useActiveUserId } from "../state/useActiveStatsUser";
import { useActiveTaskFilter } from "../state/useActiveTaskFilter";

export const useLogin = () => {
  const router = useRouter();
  const { setSessionUser } = useSession();
  const { setStatsPermission: setChartFilter } = useActiveUserId();
  const { setStatsPermission: setTaskFilter } = useActiveTaskFilter();

  return useMutation({
    mutationFn: async (formData: FormLogin) => {
      const { data } = await apiClient.post<User>("login", formData);
      return data;
    },
    onSuccess: (userData) => {
      const { role, id } = userData;

      setSessionUser({ ...userData, isLogged: true });
      setChartFilter(role, id);
      setTaskFilter(role, id);
      router.push("/dashboard");
    },
  });
};
