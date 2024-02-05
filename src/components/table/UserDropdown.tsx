import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

import { ButtonDelete } from "@/components/button/ButtonDelete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";
import { useModal } from "@/hooks/useModal";
import { Role, type User } from "@/types/users";

import { ButtonEdit } from "../button/ButtonEdit";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "../modals/DeleteModal";
import { useDeleteUser } from "@/hooks/api/useDeleteUser";
import { EditUserModal } from "../modals/EditUserModal";

export function UserDropdown({ userData }: { userData: User }) {
  const router = useNavigate();
  const { setActiveTaskFilter } = useActiveTaskFilter();
  const { id, role } = userData;
  const { isModalOpen, openModal, closeModal, modalType } = useModal();
  const deleteMutation = useDeleteUser(id, closeModal);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <BiDotsVerticalRounded className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuSeparator />
        {role === Role.employee && (
          <>
            <DropdownMenuItem>
              <button
                onClick={() => {
                  setActiveTaskFilter(id);
                  router("/dashboard/tasks");
                }}
                className="flex items-center"
                aria-label="show tasks of this user"
              >
                <BsEye className="mr-2 h-4 w-4" />
                <span>Show tasks</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuItem>
          <ButtonDelete openModal={openModal} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ButtonEdit openModal={openModal} />
        </DropdownMenuItem>
      </DropdownMenuContent>
      {isModalOpen && (
        <>
          {modalType === "delete" && (
            <DeleteModal
              handleDelete={deleteMutation.mutate}
              closeModal={closeModal}
            />
          )}
          {modalType === "edit" && (
            <EditUserModal closeModal={closeModal} userData={userData} />
          )}
        </>
      )}
    </DropdownMenu>
  );
}
