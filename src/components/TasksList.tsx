import { ButtonTask } from "./ButtonTask";

export async function TasksList() {
  const usersList: Task[] = await fetch("http://localhost:3000/api/getTasks", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <>
      {usersList.map((user) => (
        <div key={user.id} className="mb-10">
          <h1>{user.title}</h1>
          <h2>{user.description}</h2>
          <p>isCompleted: {user.isCompleted ? "Yes" : "No"}</p>
          <p>Assisgned To: {user.userId}</p>
          <ButtonTask id={user.id} />
        </div>
      ))}
    </>
  );
}
