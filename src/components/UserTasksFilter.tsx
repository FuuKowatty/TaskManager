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

interface UserTasksFilterProps {
  usersList: User[];
}

export function UserTasksFilter({ usersList }: UserTasksFilterProps) {
  const { activeTaskFilter, setActiveTaskFilter } = useActiveTaskFilter();

  const handleUserChange = (value: number) => {
    setActiveTaskFilter(value);
  };

  const fullName = getEmployeeFullNameById(usersList, activeTaskFilter);

  return (
    <Select
      value={activeTaskFilter !== null ? activeTaskFilter.toString() : "0"}
      onValueChange={(value) => handleUserChange(Number(value))}
      aria-label={`filter tasks by employee`}
    >
      <SelectTrigger className="w-[256px] border-b-2 border-gray-400 bg-white p-2 text-black focus:border-blue-700 focus:outline-none">
        <SelectValue>{activeTaskFilter ? fullName : "All"}</SelectValue>
      </SelectTrigger>
      <SelectContent>
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
