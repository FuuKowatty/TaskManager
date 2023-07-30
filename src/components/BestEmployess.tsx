import { useBestEmployees } from "@/hooks/api/useBestEmployeesList";

import { LoadingEmployeesContent } from "./ui/LoadingEmployeesContent";

export function BestEmployess() {
  const { data: bestEmployees, isLoading } = useBestEmployees();

  if (isLoading) return <LoadingEmployeesContent />;

  return (
    <>
      <div className="mb-4 w-full text-center text-xl font-bold dark:text-white">
        Best Employees
      </div>
      <ol className="w-full">
        {bestEmployees ? (
          bestEmployees
            .slice(0, 5)
            .map(({ id, name, numberOfCompletedTasks, surname }) => (
              <li
                key={id}
                className="mb-4 rounded-md bg-slate-950 p-2 text-white dark:bg-midnightBlue"
              >
                {name} {surname} - {numberOfCompletedTasks}
              </li>
            ))
        ) : (
          <p className="dark:text-white">No Employees found</p>
        )}
      </ol>
    </>
  );
}
