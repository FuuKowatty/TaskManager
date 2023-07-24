import { useFormik } from "formik";

import { createUserValidation } from "@/lib/validation";

export function useUpdateUserForm(
  userData: User,
  handleSubmit: (formData: FormRegister) => void
) {
  const { name, surname, email, password, role } = userData;
  const formik = useFormik({
    initialValues: {
      name,
      surname,
      email,
      password,
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
