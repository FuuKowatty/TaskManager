import { AiOutlineExclamationCircle } from "react-icons/ai";

import { Modal } from "./Modal";

interface ModalProps {
  handleDelete: () => void;
  closeModal: () => void;
}

export function DeleteModal({ handleDelete, closeModal }: ModalProps) {
  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AiOutlineExclamationCircle className="text-6xl text-red-400" />
          <p className="text-2xl">Are you sure?</p>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-400">
          <span className="block">Do you really want to delete? </span>
          <span>This process cannot be undone</span>
        </p>
        <div className="m-auto flex gap-2 text-xl text-white">
          <button
            className="min-w-[128px] rounded-md bg-gray-400  px-4 py-2 hover:bg-gray-500"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="min-w-[128px] rounded-md bg-red-400  px-4 py-2 hover:bg-red-500"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
