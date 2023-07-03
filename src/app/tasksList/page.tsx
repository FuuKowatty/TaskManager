
import { AddTask } from "@/components/AddTask";
import { TasksList } from "@/components/TasksList";

export default async function Page() {
  return (
    <main>
      <AddTask />
      <TasksList />
    </main>
  );
}
