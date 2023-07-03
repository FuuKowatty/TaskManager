import { Form } from "@/components/AddUserForm";
import { UsersList } from "@/components/UsersList";

export default function Home() {
  return (
    <main>
      <Form />
      <UsersList />
    </main>
  );
}
