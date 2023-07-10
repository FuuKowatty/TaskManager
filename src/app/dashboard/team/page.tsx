"use client";

import { BiPlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { UsersList } from "@/components/UsersList";

import { columns } from "@/data/usersList";
import { useUserList } from "@/hooks/useUserList";

export default function Team() {
  const { data } = useUserList();

  if (!data) {
    return null;
  }

  return (
    <section className="flex w-full flex-col items-start pl-2 pr-6">
      <h2 className="mb-12 font-golos-text text-5xl">Team</h2>
      <Button className="mb-12">
        <BiPlus className="mr-2 h-5 w-5" /> Add user
      </Button>
      <UsersList columns={columns} data={data} />
    </section>
  );
}
