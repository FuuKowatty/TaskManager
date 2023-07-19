"use client";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { PlaceholderTable } from "@/components/PlaceholderTable";
import { columns } from "@/components/table/UserColumns";
import { UsersList } from "@/components/table/UsersList";

import { useUserList } from "@/hooks/api/useUserList";

export default function Team() {
  const { data, isLoading } = useUserList();

  if (isLoading) {
    return <PlaceholderTable />;
  }

  return (
    <section className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
      <h2 className="mb-8 text-5xl font-bold">Team</h2>
      <ButtonCreate redirectTo="create-user" text="Create User" />
      <UsersList columns={columns} data={data ?? []} />
    </section>
  );
}
