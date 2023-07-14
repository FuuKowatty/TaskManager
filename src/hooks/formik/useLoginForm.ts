import { useFormik } from "formik";

import { loginValidationSchema } from "@/lib/validation";

export function useLoginForm(
  handleLogin: (formData: FormLogin) => Promise<void>
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
    formik.handleChange(e);
  };

  return {
    handleChange,
    formik,
  };
}
