"use client";

import { useRouter } from "next/navigation";

import { TaskForm } from "@/components/form/TaskForm";

import { getErrorMessage } from "@/lib/getErrorMessage";

import { useCreateTask } from "@/hooks/api/useCreateTask";
import { useCreateTaskForm } from "@/hooks/formik/useCreateTaskForm";

export default function CreateTask() {
  const router = useRouter();
  const {
    mutate: handleCreateTask,
    error: taskError,
    reset: resetApiResponseErrors,
  } = useCreateTask();
  const { formik, handleChange } = useCreateTaskForm(
    handleCreateTask,
    resetApiResponseErrors
  );

  const props = {
    formik,
    submitText: "Create Task",
    handleCancel: () => router.push("/dashboard/tasks"),
    responseError: getErrorMessage(taskError),
    handleChange,
  };

  return (
    <div className="focus-within: m-auto w-full rounded-md bg-white px-4 pb-8 pt-24 text-black dark:bg-midnightBlue dark:text-white md:max-w-xl md:px-16 lg:m-0">
      <h1 className="text-center text-3xl font-bold">Create Task</h1>
      <TaskForm {...props} />
    </div>
  );
}
