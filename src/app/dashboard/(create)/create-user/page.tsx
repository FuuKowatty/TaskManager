"use client";

import { useRouter } from "next/navigation";

import { UserForm } from "@/components/form/UserForm";

import { getErrorMessage } from "@/lib/getErrorMessage";

import { useCreateUser } from "@/hooks/api/useCreateUser";
import { useCreateUserForm } from "@/hooks/formik/useCreateUserForm";

export default function CreateUser() {
  const router = useRouter();
  const {
    mutate: handleCreateUser,
    error: createError,
    reset: resetApiResponseError,
  } = useCreateUser();
  const { formik, handleChange } = useCreateUserForm(
    handleCreateUser,
    resetApiResponseError
  );

  const props = {
    formik,
    createError: getErrorMessage(createError),
    handleChange,
    handleClose: () => router.push("/dashboard/team"),
    submitText: "Create user",
  };

  return (
    <div className="focus-within: m-auto w-full rounded-md bg-white px-4 pb-8 pt-24 text-black dark:bg-midnightBlue dark:text-white md:max-w-xl md:px-16 lg:m-0">
      <h1 className="text-center text-3xl font-bold">Create User</h1>
      <UserForm {...props} />
    </div>
  );
}
