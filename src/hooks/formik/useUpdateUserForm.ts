import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

import { useUpdateUser } from "../api/useUpdateUser";

export function useUpdateUserForm(userData: User, closeModal: () => void) {
  const editMutation = useUpdateUser(userData.id, closeModal);

  const formik = useFormik({
    initialValues: userData,
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      editMutation.mutate(formData);
    },
  });

  return {
    formik,
  };
}
