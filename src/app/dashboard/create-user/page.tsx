"use client";

import { useRouter } from "next/navigation";

import { CreateUserForm } from "@/components/form/CreateUserForm";

import { useCreateUser } from "@/hooks/api/useCreateUser";
import { useCreateUserForm } from "@/hooks/formik/useCreateUserForm";

export default function CreateUser() {
  const router = useRouter();
  const { handleCreateUser, createError } = useCreateUser();
  const { formik } = useCreateUserForm(handleCreateUser);

  return (
    <div className="focus-within: m-auto w-full rounded-md bg-white px-4 pb-8 pt-24 text-black dark:bg-midnightBlue dark:text-white md:max-w-xl md:px-16 lg:m-0">
      <h1 className="text-center text-3xl font-bold">Create User</h1>
      <CreateUserForm
        formik={formik}
        createError={createError}
        handleClose={() => router.push("/dashboard/team")}
        buttonText="Create User"
      />
    </div>
  );
}
