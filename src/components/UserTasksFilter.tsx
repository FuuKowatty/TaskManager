import type { ChangeEvent } from "react";
import { useEffect } from "react";

import { useActiveTaskFilter } from "@/hooks/state/useActiveTaskFilter";

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

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveTaskFilter(parseInt(e.target.value));
  };

  return (
    <select
      className="min-w-[256px] border-b-2 border-gray-400 bg-white p-2 text-black focus:border-blue-700 focus:outline-none"
      onChange={handleUserChange}
    >
      <option value={0} selected={!activeTaskFilter}>
        All
      </option>
      {usersList.map((user) => (
        <option
          key={user.id}
          value={user.id}
          selected={activeTaskFilter === user.id}
        >
          {user.name} {user.surname}
        </option>
      ))}
    </select>
  );
}
