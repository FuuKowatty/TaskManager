"use client";

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

import { useEmployeesList } from "@/hooks/api/useEmployeesList";
import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";

import { LoadingSpinner } from "../LoadingSpinner";

export function SelectUserInput({ userId }: { userId: number }) {
  const { setActiveStatsUserId } = useActiveUserId();
  const [value, setValue] = useState(String(userId));
  setActiveStatsUserId(parseInt(value));

  const { data: users, isLoading } = useEmployeesList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Employees</SelectLabel>
          {users &&
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
