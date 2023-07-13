import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { createUserValidation } from "@/lib/validation";

export function useUpdateUserForm(userData: User, closeModal: () => void) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: userData,
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      router.push("team");
      try {
        axios.post(`/api/getUsers/${userData.id}`, formData);
      } finally {
        router.refresh();
        closeModal();
      }
    },
  });

  return {
    formik,
  };
}
