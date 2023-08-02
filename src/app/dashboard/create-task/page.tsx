"use client";

import { useRouter } from "next/navigation";

import { TaskForm } from "@/components/form/TaskForm";

import { getErrorMessage } from "@/lib/getErrorMessage";

import { useCreateTask } from "@/hooks/api/useCreateTask";
import { useCreateTaskForm } from "@/hooks/formik/useCreateTaskForm";

export default function CreateTask() {
  const router = useRouter();
  const { mutate: handleCreateTask, error } = useCreateTask();
  const { formik } = useCreateTaskForm(handleCreateTask);
  const responseError = getErrorMessage(error);

  return (
    <div className="focus-within: m-auto w-full rounded-md bg-white px-4 pb-8 pt-24 text-black dark:bg-midnightBlue dark:text-white md:max-w-xl md:px-16 lg:m-0">
      <h1 className="text-center text-3xl font-bold">Create Task</h1>
      <TaskForm
        formik={formik}
        submitText="Create Task"
        error={responseError?.message}
        handleCancel={() => router.push("/dashboard/tasks")}
      />
    </div>
  );
}
