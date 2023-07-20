"use client";

import { CreateUserForm } from "@/components/form/CreateUserForm";

import { useCreateUser } from "@/hooks/api/useCreateUser";
import { useCreateUserForm } from "@/hooks/formik/useCreateUserForm";

export default function CreateUser() {
  const { handleCreateUser, createError } = useCreateUser();
  const { formik } = useCreateUserForm(handleCreateUser);

  return (
    <div className="focus-within: rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-md shadow-gray-300">
      <h1 className="text-center text-3xl font-bold">Create User</h1>
      <CreateUserForm formik={formik} createError={createError} />
    </div>
  );
}
