import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";
import { createUserValidation } from "@/lib/validation";

interface CreateUserFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}

export function useCreateUserForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: CreateUserFormData) => {
      return apiClient.post("getUsers", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["team"]);
      router.push("/dashboard/team");
    },
  });

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
      mutate(formData);
    },
  });

  return {
    formik,
  };
}
