import type { UseMutateFunction } from "@tanstack/react-query";
import { useFormik } from "formik";

import { loginValidationSchema } from "@/lib/validation";

import type { FormLogin, ResponseLogin } from "@/types/users";
import { AxiosResponse } from "axios";

export function useLoginForm(
  handleLogin: UseMutateFunction<AxiosResponse<ResponseLogin, any>, Error, FormLogin, unknown>,
  resetApiResponseErrors: () => void
) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (formData) => {
      handleLogin(formData);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetApiResponseErrors();
    formik.handleChange(e);
  };

  return {
    handleChange,
    formik,
  };
}