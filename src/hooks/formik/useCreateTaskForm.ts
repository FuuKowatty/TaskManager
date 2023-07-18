import { useFormik } from "formik";

import { createTaskValidation } from "@/lib/validation";

export function useCreateTaskForm(
  handleCreateTask: (formData: FormAddTask) => void
) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      endDate: "",
      userId: 0,
    } as FormAddTask,
    validationSchema: createTaskValidation,
    onSubmit: async (formData) => {
      handleCreateTask(formData);
    },
  });

  return {
    formik,
  };
}
