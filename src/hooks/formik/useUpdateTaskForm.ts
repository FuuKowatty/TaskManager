import { useFormik } from "formik";

import { formatToIsoDate } from "@/lib/formatDate";
import { taskValidation } from "@/lib/validation";

import type { Task } from "@/types/task";

export function useUpdateTaskForm(
  taskData: Task,
  handleEditTask: (data: Task) => void,
  reset: () => void
) {
  const formik = useFormik({
    initialValues: {
      ...taskData,
      endDate: formatToIsoDate(taskData.endDate),
    },
    validationSchema: taskValidation,
    onSubmit: async (formData) => {
      handleEditTask(formData);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    reset();
    formik.handleChange(e);
  };

  return {
    formik,
    handleChange,
  };
}
