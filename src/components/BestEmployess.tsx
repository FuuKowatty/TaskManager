import { useBestEmployees } from "@/hooks/api/useBestEmployeesList";

export function BestEmployess() {
  const { data: bestEmployees, isLoading } = useBestEmployees();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="row-start-4 w-full lg:col-start-2">
      <div className="mb-4 w-full text-center text-xl font-bold">
        Employees of the month
      </div>
      <ol>
        {bestEmployees ? (
          bestEmployees
            .slice(0, 5)
            .map(({ id, name, numberOfCompletedTasks, surname }) => (
              <li
                key={id}
                className="mb-4 rounded-md bg-slate-950 p-2 text-white"
              >
                {name} {surname} - {numberOfCompletedTasks}
              </li>
            ))
        ) : (
          <p>No Employees found</p>
        )}
      </ol>
    </div>
  );
}
