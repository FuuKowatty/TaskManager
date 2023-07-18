"use client";

import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDeleteTask } from "@/hooks/api/useDeleteTask";
import { useModal } from "@/hooks/useModal";

import { DeleteModal } from "../modals/DeleteModal";
import { EditTaskModal } from "../modals/EditTaskModal";

export function TaskDropdown({ taskData }: { taskData: Task }) {
  const { isModalOpen, openModal, closeModal, modalType } = useModal();
  const handleDeleteTask = useDeleteTask(taskData.id, closeModal);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <BiDotsVerticalRounded className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>Task Options</DropdownMenuLabel>
        <DropdownMenuItem>
          <button className="flex items-center">
            <BsEye className="mr-2 h-4 w-4" />
            <span>Show details</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="flex items-center"
            onClick={() => openModal("edit")}
          >
            <BiEdit className="mr-2 h-4 w-4" />
            <span>Edit task</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="flex items-center"
            onClick={() => openModal("delete")}
          >
            <BiTrash className="mr-2 h-4 w-4" />
            <span>Delete task</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
      {isModalOpen && (
        <>
          {modalType === "delete" && (
            <DeleteModal
              handleDelete={handleDeleteTask}
              closeModal={closeModal}
            />
          )}
          {modalType === "edit" && (
            <EditTaskModal taskData={taskData} closeModal={closeModal} />
          )}
        </>
      )}
    </DropdownMenu>
  );
}
