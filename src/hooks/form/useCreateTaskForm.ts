import { useFormik } from "formik";

import { taskValidation } from "@/lib/validation";

import type { FormAddTask } from "@/types/task";

export function useCreateTaskForm(
  handleCreateTask: (formData: FormAddTask) => void,
  resetApiResponseError: () => void
) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      endDate: "",
      assignedTo: 0,
    },
    validationSchema: taskValidation,
    onSubmit: async (formData) => {
      handleCreateTask({
        ...formData,
        endDate: `${formData.endDate}T23:59`
      });
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