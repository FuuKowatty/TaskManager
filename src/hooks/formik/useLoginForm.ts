import { useFormik } from "formik";

import { loginValidationSchema } from "@/lib/validation";

import type { FormLogin } from "@/types/users";

export function useLoginForm(
  handleLogin: (formData: FormLogin) => Promise<void>,
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
