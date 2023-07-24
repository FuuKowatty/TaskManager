import { useFormik } from "formik";

import { formatToIsoDate } from "@/lib/formatDate";
import { createTaskValidation } from "@/lib/validation";

export function useUpdateTaskForm(
  taskData: Task,
  handleEditTask: (data: FormAddTask) => void
) {
  const { title, description, endDate, userId } = taskData;

  const formik = useFormik({
    initialValues: {
      title,
      description,
      userId,
      endDate: formatToIsoDate(endDate),
    },
    validationSchema: createTaskValidation,
    onSubmit: async (formData) => {
      handleEditTask(formData);
    },
  });

  return {
    formik,
  };
}
