import { useFormik } from "formik";

import { userUpdateValidation } from "@/lib/validation";

import type { FormUpdate, User } from "@/types/users";

export function useUpdateUserForm(
  userData: User,
  handleSubmit: (formData: FormUpdate) => void
) {
  const { firstName, lastName, email, role } = userData;
  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      email,
      role,
    },
    validationSchema: userUpdateValidation,
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });

  return {
    formik,
  };
}
