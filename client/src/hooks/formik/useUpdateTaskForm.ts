import { useFormik } from "formik";

import { formatToIsoDate } from "@/lib/formatDate";
import { taskValidation } from "@/lib/validation";

import type { FormAddTask, Task } from "@/types/task";

export function useUpdateTaskForm(
  taskData: Task,
  handleEditTask: (data: FormAddTask) => void,
  reset: () => void
) {
  const { title, description, userId, endDate } = taskData;

  const formik = useFormik({
    initialValues: {
      title,
      description,
      endDate: formatToIsoDate(endDate),
      userId,
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
