import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";
import { getErrorMessage } from "@/lib/getErrorMessage";

import { useSession } from "@/hooks/state/useSession";

export const useLogin = () => {
  const router = useRouter();
  const { setSessionUser } = useSession();

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
