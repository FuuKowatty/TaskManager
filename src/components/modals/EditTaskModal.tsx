"use client";

import { AiOutlineExclamationCircle } from "react-icons/ai";

import { getErrorMessage } from "@/lib/getErrorMessage";

import { useUpdateTask } from "@/hooks/api/useUpdateTask";
import { useUpdateTaskForm } from "@/hooks/formik/useUpdateTaskForm";
import type { Task } from "@/types/task";

import { Modal } from "./Modal";
import { TaskForm } from "../form/TaskForm";

interface ModalProps {
  closeModal: () => void;
  taskData: Task;
}

export function EditTaskModal({ closeModal, taskData }: ModalProps) {
  const {
    mutate: handleEditTask,
    error: taskError,
    reset,
  } = useUpdateTask(taskData.id, closeModal);
  const responseError = getErrorMessage(taskError);
  const { formik, handleChange } = useUpdateTaskForm(
    taskData,
    handleEditTask,
    reset
  );

  const props = {
    formik,
    handleChange,
    submitText: "Update Task",
    handleCancel: closeModal,
    responseError,
  };

  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AiOutlineExclamationCircle className="text-6xl text-blue-700" />
          <p className="text-2xl">Update Task</p>
        </div>
        <TaskForm {...props} />
      </div>
    </Modal>
  );
}
