"use client";

import { useRouter } from "next/navigation";
import { BsPersonFillAdd } from "react-icons/bs";

import { columns } from "@/components/table/TableColumns";
import { UsersList } from "@/components/table/UsersList";

import { useUserList } from "@/hooks/api/useUserList";

export default function Team() {
  const router = useRouter();
  const { data } = useUserList();

  if (!data) {
    return null;
  }

  return (
    <section className="relative flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-8 font-golos-text text-5xl">Team</h2>
      <button
        className="absolute right-0 top-0 flex w-[162px] items-center justify-center gap-1 rounded-md bg-blue-700 p-2 font-bold text-white hover:bg-blue-800"
        onClick={() => router.push("create-user")}
      >
        <BsPersonFillAdd color="white" />
        Create User
      </button>
      <UsersList columns={columns} data={data} />
    </section>
  );
}
