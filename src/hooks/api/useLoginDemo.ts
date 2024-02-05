import { useMutation } from "@tanstack/react-query";

import type { FormLogin } from "@/types/users";

import type { ResponseLogin } from "@/types/users"

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { apiClient } from "@/lib/apiClient";


export const useLoginDemo = () => {
  const router = useNavigate();

  return useMutation({
    mutationFn: async () => {  
        const credentialsData: FormLogin = {
            email: import.meta.env.VITE_DEMO_ADMIN_EMAIL ?? "",
            password: import.meta.env.VITE_DEMO_ADMIN_PASSWORD ?? ""
        };
        return await apiClient().post<ResponseLogin>("/accounts/token", credentialsData);
    },
    onSuccess: (loginResponse) => {
      Cookies.set('token', loginResponse.data.token, {secure: true, expires: 30})
      router("/dashboard");
    },
  });
};