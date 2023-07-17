import { useBestEmployees } from "@/hooks/api/useBestEmployeesList";

export function BestEmployess() {
  const { data: bestEmployees, isLoading } = useBestEmployees();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="row-start-4 w-full lg:col-start-2 lg:row-span-3">
      <div className="mb-4 w-full text-center text-xl font-bold">
        Employees of the month
      </div>
      <ol className="lg:ml-4">
        {bestEmployees ? (
          bestEmployees.slice(0, 5).map((employee) => (
            <li
              key={employee.id}
              className="mb-4 rounded-md bg-slate-950 p-2 text-white"
            >
              {employee.name} {employee.surname} -{" "}
              {employee.numberOfCompletedTasks}
            </li>
          ))
        ) : (
          <p>No Employees found</p>
        )}
      </ol>
    </div>
  );
}
