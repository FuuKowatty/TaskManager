"use client";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { ErrorMessage } from "@/components/form/ErrorMessage";
import { columns } from "@/components/table/UserColumns";
import { UsersList } from "@/components/table/UsersTable";
import { LoadingTable } from "@/components/ui/LoadingTable";

import { useUsersList } from "@/hooks/api/useUsersList";

export default function Team() {
  const { data, status } = useUsersList();

  if (status === "loading") return <LoadingTable />;
  if (status === "error")
    return <ErrorMessage>Could not fetch users</ErrorMessage>;

  return (
    <main className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
      <h2 className="mb-8 text-5xl font-bold">Team</h2>
      <ButtonCreate redirectTo="create-user">Create User</ButtonCreate>
      <UsersList
        columns={columns}
        data={data.filter((user) => user.role !== "admin")}
      />
    </main>
  );
}
