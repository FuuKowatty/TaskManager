import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";
import { getErrorMessage } from "@/lib/getErrorMessage";

import { useSession } from "@/hooks/state/useSession";
import type { FormLogin, User } from "@/types/users";

import { useActiveUserId } from "../state/useActiveStatsUser";
import { useActiveTaskFilter } from "../state/useActiveTaskFilter";

export const useLogin = () => {
  const router = useRouter();
  const { setSessionUser } = useSession();
  const { setStatsPermission: setChartFilter } = useActiveUserId();
  const { setStatsPermission: setTaskFilter } = useActiveTaskFilter();

  const {
    mutate: loginMutate,
    error: loginError,
    reset: resetApiResponseErrors,
  } = useMutation({
    mutationFn: async (formData: FormLogin) => {
      const { data } = await apiClient.post<User>("login", formData);
      return data;
    },
    onSuccess: (userData) => {
      setSessionUser({ ...userData, isLogged: true });
      setChartFilter(userData.role, userData.id);
      setTaskFilter(userData.role, userData.id);
      router.push("/dashboard");
    },
  });

  const handleLogin = async (formData: FormLogin) => {
    loginMutate(formData);
  };

  return {
    handleLogin,
    loginError: getErrorMessage(loginError),
    resetApiResponseErrors,
  };
};
