"use client";

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
import { useSession } from "@/hooks/state/useSession";
import type { User } from "@/types/users";

import { LoadingSelectChart } from "../ui/LoadingSelectChart";

export function SelectUserInput() {
  const {
    sessionUser: { role },
  } = useSession();
  const { activeStatsUserId, setActiveStatsUserId } = useActiveUserId();
  const { data: employeesList, isLoading } = useEmployeesList();

  if (isLoading) {
    return <LoadingSelectChart />;
  }

  if (!employeesList) return null;

  const handleChange = (value: number) => {
    setActiveStatsUserId(value);
  };

  const { name, surname } =
    (employeesList.find(
      (employee) => employee.id === activeStatsUserId
    ) as User) ?? "";
  return (
    <Select
      disabled={role === "employee"}
      value={activeStatsUserId.toString()}
      onValueChange={(value: string) => handleChange(Number(value))}
      aria-label={`filter tasks by employee`}
    >
      <SelectTrigger className="w-[180px] dark:bg-midnightBlue dark:text-white">
        <SelectValue>
          {activeStatsUserId ? `${name} ${surname}` : "All"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="dark:bg-midnightBlue">
        <SelectGroup>
          <SelectLabel>Employees</SelectLabel>
          <SelectItem value="0">All</SelectItem>
          {employeesList &&
            employeesList.map((employee) => (
              <SelectItem
                value={String(employee.id)}
                key={employee.id}
              >{`${employee.name} ${employee.surname}`}</SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
