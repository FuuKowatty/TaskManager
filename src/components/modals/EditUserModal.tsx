import { AiOutlineExclamationCircle } from "react-icons/ai";

import { useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useUpdateUserForm } from "@/hooks/form/useUpdateUserForm";
import type { FormUpdate, User } from "@/types/users";

import { Modal } from "./Modal";
import { UpdateUserForm } from "../form/UserModalForm";
import { getErrorMessage } from "@/lib/getErrorMessage";

interface ModalProps {
  closeModal: () => void;
  userData: User;
}

export function EditUserModal({ closeModal, userData }: ModalProps) {
  const { mutate, error } = useUpdateUser(userData.id, closeModal);
  const responseError = getErrorMessage(error);
  const handleSubmit = (formData: FormUpdate) => mutate(formData);
  const { formik } = useUpdateUserForm(userData, handleSubmit);

  console.log(formik.errors)
  return (
    <Modal>
      <div className="flex h-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AiOutlineExclamationCircle className="text-6xl text-blue-700" />
          <p className="text-2xl">Update User</p>
        </div>
        <UpdateUserForm formik={formik} closeModal={closeModal} createError={responseError}/>
      </div>
    </Modal>
  );
}
