import { Button } from "./Button";

export async function UsersList() {
  const usersList = await fetch("http://localhost:3000/api/getUsers", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div>
      {usersList.map((user: User) => (
        <div key={user.id} className="mb-10 flex gap-1">
          <h1>{user.name}</h1>
          <h2>{user.surname}</h2>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <Button id={user.id} />
        </div>
      ))}
    </div>
  );
}
