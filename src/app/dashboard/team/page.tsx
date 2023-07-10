"use client";

import { useRouter } from "next/navigation";

import { UsersList } from "@/components/UsersList";

import { columns } from "@/data/usersList";
import { useUserList } from "@/hooks/useUserList";

export default function Team() {
  const router = useRouter();
  const { data } = useUserList();

  if (!data) {
    return null;
  }

  return (
    <section className="relative flex w-full flex-col pl-2 pr-6">
      <h2 className="mb-8 font-golos-text text-5xl">Team</h2>
      <button
        className="absolute right-0 top-0 w-[196px] rounded-md bg-blue-700 p-2 font-bold text-white hover:bg-blue-800"
        onClick={() => router.push("create-user")}
      >
        Create User
      </button>
      <UsersList columns={columns} data={data} />
    </section>
  );
}
