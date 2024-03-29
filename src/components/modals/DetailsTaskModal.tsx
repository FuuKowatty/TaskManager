import { formatDate } from "@/lib/formatDate";

import { Modal } from "./Modal";
import { Task } from "@/types/task";

interface DetailsTaskModalProps extends Task{
  closeModal: () => void;
}

export function DetailsTaskModal({
  closeModal,
  title,
  description,
  assignedTo,
  startDate,
  endDate,
  status,
}: DetailsTaskModalProps) {
  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <h2 className="text-2xl font-bold text-gray-600 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {description || "No description available"}
        </p>
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-bold">Assigned To:</span> {assignedTo}
          </p>
          <p>
            <span className="font-bold">Start Date:</span>{" "}
            {formatDate(startDate)}
          </p>
          <p>
            <span className="font-bold">End Date:</span> {formatDate(endDate)}
          </p>
          <p>
            <span className="font-bold">Status:</span>{" "}
            {status}
          </p>
        </div>
        <div className="m-auto flex gap-2 text-xl text-white">
          <button
            className="min-w-[128px] rounded-md bg-gray-400  px-4 py-2 hover:bg-gray-500"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
