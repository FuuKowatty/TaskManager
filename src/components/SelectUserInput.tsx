"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectUserInput({
  handleChangeUser,
  userId,
}: {
  handleChangeUser: (id: number) => void;
  userId: number;
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [value, setValue] = useState(String(userId));

  useEffect(() => {
    const fetchUsers = async () => {
      const users = axios.get("api/getUsers");
      setUsers((await users).data);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    handleChangeUser(Number(value));
  }, [value, handleChangeUser]);

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a employee" />
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
