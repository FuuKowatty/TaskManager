import { useFormik } from "formik";

import { taskValidation } from "@/lib/validation";

import type { Task } from "@/types/task";

export function useUpdateTaskForm(
  taskData: Task,
  handleCreateTask: (formData: Task) => void,
  resetApiResponseError: () => void
) {
  const formik = useFormik({
    initialValues: {
      title: taskData.title,
      description: taskData.description,
      endDate: taskData.endDate,
      assignedTo: taskData.assignedTo,
    },
    validationSchema: taskValidation,
    onSubmit: async (formData) => {
      handleCreateTask(formData as Task);
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