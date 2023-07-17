"use client";

import { ButtonCreate } from "@/components/button/ButtonCreate";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { columns } from "@/components/table/TableColumns";
import { UsersList } from "@/components/table/UsersList";

import { useUserList } from "@/hooks/api/useUserList";

export default function Team() {
  const { data, isLoading } = useUserList();

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 text-5xl font-bold">Team</h2>
      <ButtonCreate redirectTo="create-user" text="Create User" />
      <UsersList columns={columns} data={data ?? []} />
    </section>
  );
}
