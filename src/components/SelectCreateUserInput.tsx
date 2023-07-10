"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const userRoles = ["employee", "admin", "manager"];

interface Props {
  value: string;
  handleChange: (value: string) => void;
}

export function SelectCreateUserInput({ value, handleChange }: Props) {
  return (
    <label>
      Select Role
      <Select
        value={value}
        name="role"
        onValueChange={(e: any) => handleChange(e.target.value)}
      >
        <SelectTrigger>
          <SelectValue>{value ? value : "Select a role"}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {userRoles.map((role) => (
            <SelectItem value={role} key={role}>
              {role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}
