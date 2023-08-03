import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

import type { FormRegister, Role } from "@/types/users";

export function useCreateUserForm(
  handleCreateUser: (formData: FormRegister) => void,
  resetApiResponseError: () => void
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetApiResponseError();
    formik.handleChange(e);
  };

  return {
    formik,
    handleChange,
  };
}
