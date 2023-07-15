"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { apiClient } from "@/lib/apiClient";

import { useActiveUserId } from "@/state/useActiveStatsUser";

export function SelectUserInput({ userId }: { userId: number }) {
  const { setActiveStatsUserId } = useActiveUserId();
  const [value, setValue] = useState(String(userId));
  setActiveStatsUserId(parseInt(value));

  const { data: users } = useQuery({
    queryFn: async () => {
      const { data } = await apiClient.get<User[]>("getUsers");
      return data;
    },
    queryKey: ["stat users"],
  });

  if (!users) {
    return <p>loading</p>;
  }

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Employees</SelectLabel>
          {users.length &&
            users.map((user) => (
              <SelectItem
                value={String(user.id)}
                key={user.id}
              >{`${user.name} ${user.surname}`}</SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
