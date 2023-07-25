"use client";

import { AiOutlineExclamationCircle } from "react-icons/ai";

import { useUpdateTask } from "@/hooks/api/useUpdateTask";
import { useUpdateTaskForm } from "@/hooks/formik/useUpdateTaskForm";

import { Modal } from "./Modal";
import { TaskForm } from "../form/TaskForm";

interface ModalProps {
  closeModal: () => void;
  taskData: Task;
}

export function EditTaskModal({ closeModal, taskData }: ModalProps) {
  const { mutate: handleEditTask } = useUpdateTask(taskData.id, closeModal);
  const { formik } = useUpdateTaskForm(taskData, handleEditTask);

  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AiOutlineExclamationCircle className="text-6xl text-blue-700" />
          <p className="text-2xl">Update Task</p>
        </div>
        <TaskForm
          formik={formik}
          submitText="Update Task"
          handleCancel={closeModal}
        />
      </div>
    </Modal>
  );
}
