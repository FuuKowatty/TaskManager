import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

export function useCreateUserForm(
  handleCreateUser: (formData: FormRegister) => void
) {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      role: "employee",
    } as FormRegister,
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      handleCreateUser(formData);
    },
  });

  return {
    formik,
  };
}
