import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const {
    mutate: handleLogin,
    error: loginErrors,
    reset: resetLoginState,
    data,
  } = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const { data } = await axios.post<{ user: User }>(
        "http://localhost:3000/api/login",
        credentials
      );
      return data.user;
    },
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
    data,
  };
};
