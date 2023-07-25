import { useFormik } from "formik";

import { createTaskValidation } from "@/lib/validation";

import type { FormAddTask } from "@/types/task";

export function useCreateTaskForm(
  handleCreateTask: (formData: FormAddTask) => void
) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      endDate: "",
      userId: 0,
    },
    validationSchema: createTaskValidation,
    onSubmit: async (formData) => {
      handleCreateTask(formData);
    },
  });

  return {
    formik,
  };
}
