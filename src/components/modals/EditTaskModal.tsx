import { AiOutlineExclamationCircle } from "react-icons/ai";

import type { Task } from "@/types/task";

import { Modal } from "./Modal";
import { UpdateTaskForm } from "../form/UpdateTaskForm";

interface ModalProps {
  closeModal: () => void;
  taskData: Task;
}

export function EditTaskModal({ closeModal, taskData }: ModalProps) {
  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AiOutlineExclamationCircle className="text-6xl text-blue-700" />
          <p className="text-2xl">Update Task</p>
        </div>
        <UpdateTaskForm taskData={taskData} closeModal={closeModal} />
      </div>
    </Modal>
  );
}
