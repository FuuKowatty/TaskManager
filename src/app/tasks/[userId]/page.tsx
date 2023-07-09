import { ListTasks } from "@/components/ListTasks";

export default async function TasksPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <main className="h-[20rem]">
      <ListTasks userId={parseInt(params.userId)} />
    </main>
  );
}
