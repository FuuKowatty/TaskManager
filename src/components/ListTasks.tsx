"use client";

import axios from "axios";

import { useSession } from "@/state/useSession";

import { Task } from "./Task";

export async function ListTasks() {
  const { sessionUser } = useSession();
  const { data: tasks }: { data: Task[] } = await axios.get(
    `/api/getTasks/${sessionUser?.id}`
  );

  return (
    <div className="relative col-start-2 row-span-3 row-start-4 flex h-full w-full flex-col items-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
        <span className="mb-4 shrink-0 text-xl font-bold">Your Tasks:</span>
        {tasks.length ? (
          <div className="flex w-full flex-col items-center overflow-y-auto">
            {tasks.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </div>
        ) : (
          <div>No Tasks</div>
        )}
      </div>
    </div>
  );
}
