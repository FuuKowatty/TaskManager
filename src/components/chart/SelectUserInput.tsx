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

import { LoadingSpinner } from "../LoadingSpinner";

export function SelectUserInput() {
  const { activeStatsUserId, setActiveStatsUserId } = useActiveUserId();
  const { data: employeesList, isLoading } = useEmployeesList();

  if (isLoading) {
    return <LoadingSpinner />;
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
      value={activeStatsUserId.toString()}
      onValueChange={(value: string) => handleChange(Number(value))}
      aria-label={`filter tasks by employee`}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {activeStatsUserId ? `${name} ${surname}` : "All"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
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
