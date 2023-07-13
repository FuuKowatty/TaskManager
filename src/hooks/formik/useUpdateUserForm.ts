import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

export function useUpdateUserForm(userData: User, closeModal: () => void) {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: async (data: User) => {
      axios.post(`/api/getUsers/${userData.id}`, data);
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
