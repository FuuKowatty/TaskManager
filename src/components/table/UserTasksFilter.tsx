import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getEmployeeFullNameById } from "@/lib/getEmployeeByName";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";
import type { User } from "@/types/users";

interface UserTasksFilterProps {
  usersList: User[];
  role: string;
}

export function UserTasksFilter({ usersList, role }: UserTasksFilterProps) {
  const { activeTaskFilter, setActiveTaskFilter } = useActiveTaskFilter();

  const handleUserChange = (value: number) => {
    setActiveTaskFilter(value);
  };

  const fullName = getEmployeeFullNameById(usersList, activeTaskFilter);

  return (
    <Select
      disabled={role === "employee"}
      value={activeTaskFilter !== null ? activeTaskFilter.toString() : "0"}
      onValueChange={(value) => handleUserChange(Number(value))}
      aria-labelledby="filter tasks by employee"
    >
      <SelectTrigger className="w-[256px] border-b-2 border-gray-400 bg-lightGray p-2 text-black focus:border-blue-700">
        <SelectValue>{activeTaskFilter ? fullName : "All"}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-lightGray">
        <SelectGroup>
          <SelectLabel>Employees</SelectLabel>
          <SelectItem value="0">All</SelectItem>
          {usersList.map((user) => (
            <SelectItem
              value={user.id.toString()}
              key={user.id}
            >{`${user.name} ${user.surname}`}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
