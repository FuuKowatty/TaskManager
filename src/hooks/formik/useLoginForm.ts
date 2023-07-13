import { useFormik } from "formik";
import { useState } from "react";

import { loginValidationSchema } from "@/lib/validation";

import { useLogin } from "@/hooks/api/useLogin";

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin, getLoginErrorMessage, resetLoginState } = useLogin();

  const loginError = getLoginErrorMessage();

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (formData) => {
      startLoading();
      handleLogin(formData, {
        onSettled: stopLoading,
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetLoginState();
    formik.handleChange(e);
  };

  return {
    handleChange,
    formik,
    loginError,
    isLoading,
    startLoading,
    stopLoading,
  };
}
