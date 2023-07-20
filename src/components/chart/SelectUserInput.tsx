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

export function SelectUserInput({ blocked }: { blocked?: boolean }) {
  const { activeStatsUserId, setActiveStatsUserId } = useActiveUserId();
  const { data: employeesList, isLoading } = useEmployeesList();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <Select
      disabled={blocked ?? false}
      value={activeStatsUserId.toString()}
      onValueChange={(value: string) => setActiveStatsUserId(Number(value))}
      aria-label={`filter tasks by employee`}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {activeStatsUserId
            ? employeesList?.find(
                (employee) => employee.id === activeStatsUserId
              )?.name
            : "All"}
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
