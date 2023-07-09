import axios from "axios";

export async function BestEmployess() {
  const { data: bestEmployees }: { data: UserWithCompletedTasks[] } =
    await axios.get("api/getUsersByTaskCount");

  return (
    <div className="mt-4 w-full">
      <div className="mb-4 w-full text-center text-xl font-bold">
        Employees of the month
      </div>
      <ol className="ml-4">
        {bestEmployees.slice(0, 10).map((employee) => (
          <li key={employee.id} className="mb-2 bg-slate-950 p-1 text-white">
            {employee.name} {employee.surname} -{" "}
            {employee.numberOfCompletedTasks}
          </li>
        ))}
      </ol>
    </div>
  );
}
