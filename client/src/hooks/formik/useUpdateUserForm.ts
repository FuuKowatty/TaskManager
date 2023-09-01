import { useFormik } from "formik";

import { userValidation } from "@/lib/validation";

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
    validationSchema: userValidation,
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });

  return {
    formik,
  };
}
