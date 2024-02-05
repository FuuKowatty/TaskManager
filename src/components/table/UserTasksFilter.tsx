import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectUserInput";


import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";
import { getEmployeeFullNameById } from "@/lib/getEmployeeFullNameById";
import type { User } from "@/types/users";
import { Role } from "@/types/users";
  
  interface UserTasksFilterProps {
    usersList: User[];
    role: Role;
  }
  
  export function UserTasksFilter({ usersList, role }: UserTasksFilterProps) {
    const { activeTaskFilter, setActiveTaskFilter } = useActiveTaskFilter();
    
    return (
      <Select
        disabled={role === Role.employee}
        value={activeTaskFilter !== null ? activeTaskFilter.toString() : "0"}
        onValueChange={(value) => setActiveTaskFilter(+value)}
        aria-labelledby="filter tasks by employee"
      >
        <SelectTrigger className="w-[256px] border-b-2 border-gray-400 bg-lightGray p-2 text-black dark:text-white focus:border-blue-700">
          <SelectValue>{activeTaskFilter ? getEmployeeFullNameById(usersList, activeTaskFilter) : "All"}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-lightGray">
          <SelectGroup className="dark:text-white">
            <SelectLabel>Employees</SelectLabel>
            <SelectItem value="0">All</SelectItem>
            {usersList.map((user) => (
              <SelectItem
                value={user.id.toString()}
                key={user.id}
              >
                {`${user.firstName} ${user.lastName}`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }