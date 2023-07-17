import prisma from "@/lib/prisma";

export async function getTasks(): Promise<Task[]> {
  const tasks = await prisma.task.findMany();
  return tasks;
}
