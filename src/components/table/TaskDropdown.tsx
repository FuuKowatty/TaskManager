import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

import { DeleteModal } from "@/components/modals/DeleteModal";
import { DetailsTaskModal } from "@/components/modals/DetailsTaskModal";
import { EditTaskModal } from "@/components/modals/EditTaskModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDeleteTask } from "@/hooks/api/useDeleteTask";
import { useSession } from "@/hooks/state/useSession";
import { useModal } from "@/hooks/useModal";
import type { Task } from "@/types/task";
import { Role } from "@/types/users";

export function TaskDropdown({
  taskData
}: {
  taskData: Task;
  assignedTo: string;
}) {
  const { isModalOpen, openModal, closeModal, modalType } = useModal();
  const { mutate: handleDeleteTask } = useDeleteTask(taskData.id, closeModal);
  const {
    sessionUser: { role },
  } = useSession();

  const renderModal = () => {
    switch (modalType) {
      case "delete":
        return (
          <DeleteModal
            handleDelete={handleDeleteTask}
            closeModal={closeModal}
          />
        );
      case "edit":
        return <EditTaskModal taskData={taskData} closeModal={closeModal} />;
      case "details":
        return (
          <DetailsTaskModal
            closeModal={closeModal}
            {...taskData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <BiDotsVerticalRounded className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" >
          <DropdownMenuItem>
            <button
              className="flex items-center"
              onClick={() => openModal("details")}
            >
              <BsEye className="mr-2 h-4 w-4" />
              <span>Show details</span>
            </button>
          </DropdownMenuItem>

          {role !== Role.employee && (
            <>
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
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {isModalOpen && renderModal()}
    </>
  );
}