"use client";

import { useRouter } from "next/navigation";

import { TaskForm } from "@/components/form/TaskForm";

import { useCreateTask } from "@/hooks/api/useCreateTask";
import { useCreateTaskForm } from "@/hooks/formik/useCreateTaskForm";

export default function CreateTask() {
  const router = useRouter();
  const { mutate: handleCreateTask } = useCreateTask();
  const { formik } = useCreateTaskForm(handleCreateTask);

  return (
    <div className="focus-within: rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-md shadow-gray-300">
      <h1 className="text-center text-3xl font-bold">Create Task</h1>
      <TaskForm
        formik={formik}
        submitText="Create Task"
        handleCancel={() => router.back()}
      />
    </div>
  );
}
