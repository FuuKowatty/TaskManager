import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectUserInput";

import { useEmployeesList } from "@/hooks/api/useEmployeesList";
import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";


import { ErrorMessage } from "../form/ErrorMessage";
import { LoadingSelectChart } from "../ui/LoadingSelectChart";

export function SelectUserInput() {
  const { activeStatsUserId, setActiveStatsUserId } = useActiveUserId();
  const { data: employeesList, isLoading, error } = useEmployeesList();

  if (isLoading) {
    return <LoadingSelectChart />;
  }

  if (error) {
    return <ErrorMessage>Could not fetch employees</ErrorMessage>;
  }

  const handleChange = (value: number) => {
    setActiveStatsUserId(value);
  };

  const foundEmployee = employeesList?.find((employee) => employee.id === activeStatsUserId);
  const { firstName, lastName } = foundEmployee ?? {};
  return (
    <Select
      value={activeStatsUserId.toString()}
      onValueChange={(value: string) => handleChange(Number(value))}
      aria-label={`filter tasks by employee`}
    >
      <SelectTrigger
        className="w-[180px] dark:bg-midnightBlue dark:text-white"
        aria-labelledby="choose employee"
      >
        <SelectValue>
          {activeStatsUserId ? `${firstName} ${lastName}` : "All"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="dark:bg-midnightBlue dark:text-white">
        <SelectGroup>
          <SelectLabel>Employees</SelectLabel>
          <SelectItem value="0">All</SelectItem>
          {employeesList &&
            employeesList.map((employee) => (
              <SelectItem
                value={String(employee.id)}
                key={employee.id}
              >{`${employee.firstName} ${employee.lastName}`}</SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
