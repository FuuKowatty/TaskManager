import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

import type { FormRegister, Role } from "@/types/users";

export function useCreateUserForm(
  handleCreateUser: (formData: FormRegister) => void
) {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      role: "employee" as Role,
    },
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      handleCreateUser(formData);
    },
  });

  return {
    formik,
  };
}
