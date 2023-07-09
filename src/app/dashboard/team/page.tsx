"use client";

import { UsersList } from "@/components/UsersList";

import { columns } from "@/data/usersList";
import { useUserList } from "@/hooks/useUserList";

export default function Team() {
  const { data } = useUserList();

  if (!data) {
    return null;
  }

  return (
    <section className="flex w-full flex-col pl-2 pr-6">
      <h2 className="mb-8 font-golos-text text-5xl">Team</h2>
      <UsersList columns={columns} data={data} />
    </section>
  );
}
