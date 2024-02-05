"use client";

import { BiTrash } from "react-icons/bi";

import type { OpenModal } from "@/types/modal";

export function ButtonDelete({ openModal }: { openModal: OpenModal }) {
  return (
    <button onClick={() => openModal("delete")} className="flex items-center">
      <BiTrash className="mr-2 h-4 w-4" />
      <span>delete user</span>
    </button>
  );
}
