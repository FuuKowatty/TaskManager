import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";

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

  const getLoginErrorMessage = () => {
    if (loginError instanceof AxiosError) {
      const errorData = loginError.response?.data;

      if (
        typeof errorData.type !== "string" &&
        typeof errorData.message !== "string"
      ) {
        return;
      }

      return errorData;
    }
  };

  const handleLogin = async (formData: FormLogin) => {
    loginMutate(formData);
  };

  return {
    handleLogin,
    loginError: getLoginErrorMessage(),
    resetApiResponseErrors,
  };
};
