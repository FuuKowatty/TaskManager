import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

import type { FormRegister, User } from "@/types/users";

export function useUpdateUserForm(
  userData: User,
  handleSubmit: (formData: FormRegister) => void
) {
  const { name, surname, email, role } = userData;
  const formik = useFormik({
    initialValues: {
      name,
      surname,
      email,
      password: "[USER-PASSWORD]",
      role,
    } as FormRegister,
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });

  return {
    formik,
  };
}
