async function getBestEmployees(): Promise<UserWithCompletedTasks[]> {
  const request = await fetch("http://localhost:3000/api/getUsersByTaskCount");
  const data = await request.json();
  return data;
}

export async function BestEmployess() {
  const bestEmployees = await getBestEmployees();

  return (
    <div className="col-start-2 row-span-3 row-start-4 w-full">
      <div className="mb-4 w-full text-center text-xl font-bold">
        Employees of the month
      </div>
      <ol className="ml-4">
        {bestEmployees.slice(0, 5).map((employee) => (
          <li
            key={employee.id}
            className="mb-4 rounded-md bg-slate-950 p-2 text-white"
          >
            {employee.name} {employee.surname} -{" "}
            {employee.numberOfCompletedTasks}
          </li>
        ))}
      </ol>
    </div>
  );
}
