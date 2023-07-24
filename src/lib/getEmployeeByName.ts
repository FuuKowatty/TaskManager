export function getEmployeeFullNameById(employeesList: User[], id: number) {
  const employee =
    employeesList?.find((employee) => employee.id === id) ?? null;
  return employee ? `${employee.name} ${employee.surname}` : "";
}
