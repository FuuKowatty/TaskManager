import type { UseMutateFunction } from "@tanstack/react-query";
import { useFormik } from "formik";

import { loginValidationSchema } from "@/lib/validation";

import type { FormLogin, User } from "@/types/users";

export function useLoginForm(
  handleLogin: UseMutateFunction<User, unknown, FormLogin, unknown>,
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
