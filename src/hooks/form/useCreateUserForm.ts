import { useFormik } from "formik";

import { userValidation } from "@/lib/validation";

import { Role, type FormRegister } from "@/types/users";

export function useCreateUserForm(
  handleCreateUser: (formData: FormRegister) => void,
  resetApiResponseError: () => void
) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: Role.employee,
    },
    validationSchema: userValidation,
    onSubmit: async (formData: FormRegister) => {
      handleCreateUser(formData);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetApiResponseError();
    formik.handleChange(e);
  };

  return {
    formik,
    handleChange,
  };
}
