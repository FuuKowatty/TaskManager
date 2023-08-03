import { useFormik } from "formik";

import { createTaskValidation } from "@/lib/validation";

import type { FormAddTask } from "@/types/task";

export function useCreateTaskForm(
  handleCreateTask: (formData: FormAddTask) => void,
  resetApiResponseError: () => void
) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "" as string | null,
      endDate: "",
      userId: 0,
    },
    validationSchema: createTaskValidation,
    onSubmit: async (formData) => {
      handleCreateTask(formData);
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
