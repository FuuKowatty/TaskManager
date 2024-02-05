import { User } from "@/types/users";

export function getEmployeeFullNameById(employeesList: User[], id: number) {
    const employee =
      employeesList?.find((employee) => employee.id === id) ?? null;
    return employee ? `${employee.firstName} ${employee.lastName}` : "";
  }