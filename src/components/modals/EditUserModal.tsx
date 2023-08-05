import { AiOutlineExclamationCircle } from "react-icons/ai";

import { useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useUpdateUserForm } from "@/hooks/formik/useUpdateUserForm";
import type { FormRegister, User } from "@/types/users";

import { Modal } from "./Modal";
import { UserForm } from "../form/UserForm";

interface ModalProps {
  closeModal: () => void;
  userData: User;
}

export function EditUserModal({ closeModal, userData }: ModalProps) {
  const { mutate } = useUpdateUser(userData.id, closeModal);
  const handleSubmit = (formData: FormRegister) => mutate(formData);
  const { formik } = useUpdateUserForm(userData, handleSubmit);

  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AiOutlineExclamationCircle className="text-6xl text-blue-700" />
          <p className="text-2xl">Update Task</p>
        </div>
        <UserForm
          formik={formik}
          handleClose={closeModal}
          submitText="Update User"
        />
      </div>
    </Modal>
  );
}
