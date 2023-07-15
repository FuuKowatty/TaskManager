"use client";

import Link from "next/link";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

import { ButtonDelete } from "@/components/button/ButtonDelete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDeleteUser } from "@/hooks/api/useDeleteUser";
import { useModal } from "@/hooks/useModal";

import { ButtonEdit } from "../button/ButtonEdit";
import { DeleteUserModal } from "../modals/DeleteUserModal";
import { EditUserModal } from "../modals/EditUserModal";

export function Dropdown({ userData }: { userData: User }) {
  const { id, name, surname } = userData;
  const { isModalOpen, openModal, closeModal, modalType } = useModal();
  const handleDeleteUser = useDeleteUser(id, closeModal);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <BiDotsVerticalRounded className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>{`${name} ${surname}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/tasks/${id}`}>
          <DropdownMenuItem>
            <BsEye className="mr-2 h-4 w-4" />
            <span>Show tasks</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
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
            <DeleteUserModal
              handleDeleteUser={handleDeleteUser}
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
