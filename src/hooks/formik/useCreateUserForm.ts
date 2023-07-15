import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

import { useCreateUser } from "../api/useCreateUser";

export function useCreateUserForm() {
  const { mutate } = useCreateUser();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      role: "employee",
    },
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      mutate(formData);
    },
  });

  return {
    formik,
  };
}
