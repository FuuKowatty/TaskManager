"use client";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingTable } from "@/components/LoadingTable";
import { columns } from "@/components/table/UserColumns";
import { UsersList } from "@/components/table/UsersTable";

import { useUsersList } from "@/hooks/api/useUsersList";

export default function Team() {
  const { data, isLoading } = useUsersList();

  if (isLoading) {
    return <LoadingTable />;
  }

  return (
    <section className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
      <h2 className="mb-8 text-5xl font-bold">Team</h2>
      <ButtonCreate redirectTo="create-user">Create User</ButtonCreate>
      <UsersList
        columns={columns}
        data={data?.filter((user) => user.role !== "admin") ?? []}
      />
    </section>
  );
}
