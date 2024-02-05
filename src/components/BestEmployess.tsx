

import { useBestEmployees } from "@/hooks/api/useBestEmployeesList";
import { ErrorMessage } from "./form/ErrorMessage";
import { LoadingEmployeesContent } from "./ui/LoadingEmployeesContent";

export function BestEmployess() {
  const { data: bestEmployees, isLoading, error } = useBestEmployees();
  if (isLoading) return <LoadingEmployeesContent />;
  if (error) return <ErrorMessage>Could not fetch employees data</ErrorMessage>;

  return (
    <>
      <div className="mb-4 w-full text-center text-xl font-bold dark:text-white">
        Best Employees
      </div>
      <ol className="w-full">
        {bestEmployees ? (
          bestEmployees
            .slice(0, 5)
            .map(({user, numberOfCompletedTasks}) => (
              <li
                key={user.id}
                className="mb-4 rounded-md bg-slate-950 p-2 text-white dark:bg-midnightBlue"
              >
                {user.firstName} {user.lastName} - {numberOfCompletedTasks}
              </li>
            ))
        ) : (
          <p className="dark:text-white">No Employees with completed tasks found</p>
        )}
      </ol>
    </>
  );
}
