import { BiEdit } from "react-icons/bi";

import type { OpenModal } from "@/types/modal";

export function ButtonEdit({ openModal }: { openModal: OpenModal }) {
  return (
    <button
      className="flex items-center gap-1"
      onClick={() => openModal("edit")}
    >
      <BiEdit className="mr-2 h-4 w-4" />
      <span>Edit user</span>
    </button>
  );
}
