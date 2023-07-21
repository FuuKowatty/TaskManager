import { useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";
import { useSession } from "@/hooks/state/useSession";

interface UserTasksFilterProps {
  usersList: User[];
  tasksList: Task[];
  handleChangeData: (data: Task[]) => void;
}

export function UserTasksFilter({
  usersList,
  tasksList,
  handleChangeData,
}: UserTasksFilterProps) {
  const {
    sessionUser: { name, surname, role },
  } = useSession();
  const { activeTaskFilter, setActiveTaskFilter } = useActiveTaskFilter();

  useEffect(() => {
    const filterTasksByActiveUser = () => {
      if (!activeTaskFilter) return handleChangeData(tasksList);

      const user = usersList?.find((user) => user.id === activeTaskFilter);
      if (!user) return handleChangeData([]);

      handleChangeData(
        tasksList.filter((task) => task.userId === user?.id) as Task[]
      );
    };

    filterTasksByActiveUser();
  }, [activeTaskFilter, tasksList, usersList, handleChangeData]);

  const handleUserChange = (value: number) => {
    setActiveTaskFilter(value);
  };

  return (
    <Select
      disabled={role === "employee"}
      value={activeTaskFilter !== null ? activeTaskFilter.toString() : "0"}
      onValueChange={(value) => handleUserChange(Number(value))}
      aria-label={`filter tasks by employee`}
    >
      <SelectTrigger className="w-[256px] border-b-2 border-gray-400 bg-white p-2 text-black focus:border-blue-700 focus:outline-none">
        <SelectValue>
          {activeTaskFilter
            ? usersList.find((user) => user.id === activeTaskFilter)?.name +
              " " +
              usersList.find((user) => user.id === activeTaskFilter)?.surname
            : role === "employee"
            ? `${name} ${surname}`
            : "All"}
        </SelectValue>
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
