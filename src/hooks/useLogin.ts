import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { useActiveUserId } from "@/state/useActiveStatsUser";
import { useSession } from "@/state/useSession";

interface Credentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { setSessionUser } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();
  const router = useRouter();

  const onSuccess = (data?: User) => {
    if (!data) {
      return;
    }
    setSessionUser(data);
    setActiveStatsUserId(data.id);
    router.push("/dashboard");
  };

  const {
    mutate: handleLogin,
    error: loginErrors,
    reset: resetLoginState,
  } = useMutation({
    mutationFn: async (credentials: Credentials) => {
      const { data } = await axios.post<User>(
        "http://localhost:3000/api/login",
        credentials
      );
      return data;
    },
    onSuccess,
  });

  function getLoginErrorMessage() {
    if (loginErrors instanceof AxiosError) {
      const errorData = loginErrors.response?.data;

      if (
        typeof errorData.type !== "string" &&
        typeof errorData.message !== "string"
      ) {
        return;
      }

      return errorData;
    }
  }

  return {
    handleLogin,
    getLoginErrorMessage,
    resetLoginState,
  };
};
