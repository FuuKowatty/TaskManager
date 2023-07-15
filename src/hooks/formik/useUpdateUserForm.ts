import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";

import { apiClient } from "@/lib/apiClient";
import { createUserValidation } from "@/lib/validation";

export function useUpdateUserForm(userData: User, closeModal: () => void) {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: async (data: User) => {
      apiClient.post(`getUsers/${userData.id}`, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["team"]);
      closeModal();
    },
  });

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
