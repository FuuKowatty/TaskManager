import { useMutation } from "@tanstack/react-query";

import type { FormLogin } from "@/types/users";

import type { ResponseLogin } from "@/types/users"

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { apiClient } from "@/lib/apiClient";

export const useLogin = () => {
  const router = useNavigate();

  return useMutation({
    mutationFn: async (formData: FormLogin) => {
        return await apiClient().post<ResponseLogin>("/accounts/token", formData);
    },
    onSuccess: (loginResponse) => {
      Cookies.set('token', loginResponse.data.token, {secure: true, expires: 30})
      router("/dashboard");
    },
  });
};