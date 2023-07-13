import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { createUserValidation } from "@/lib/validation";

export function useCreateUserForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      role: "employee",
    },
    validationSchema: createUserValidation,
    onSubmit: async (formData) => {
      router.push("team");
      axios.post("/api/getUsers", formData).finally(() => {
        router.refresh();
      });
    },
  });

  return {
    formik,
  };
}
