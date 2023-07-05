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
    <div>
      <span>Your Tasks:</span>
      {tasks.length ? (
        <div className="flex flex-col gap-8">
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}
