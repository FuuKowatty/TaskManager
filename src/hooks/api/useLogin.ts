import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";
import { getErrorMessage } from "@/lib/getErrorMessage";

import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";
import { useSession } from "@/hooks/state/useSession";

import { useAuth } from "./useAuth";

export const useLogin = () => {
  useAuth();
  const router = useRouter();
  const { sessionUser, setSessionUser } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();

  if (sessionUser.isLogged) router.push("/dashboard");

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
      setActiveStatsUserId(userData.id);
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
