"use client";

import axios from "axios";

import { useAppSelector } from "@/redux/hooks";

import { Task } from "./Task";

export async function ListTasks() {
  const id = useAppSelector((state) => state.usersReducer.loggedUser?.id);
  const { data: tasks }: { data: Task[] } = await axios.get(
    `/api/getTasks/${id}`
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
