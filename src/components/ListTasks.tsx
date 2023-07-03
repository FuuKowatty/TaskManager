"use client";

import axios from "axios";

import { useAppSelector } from "@/redux/hooks";

export async function ListTasks() {
  const id = useAppSelector((state) => state.usersReducer.loggedUser?.id);
  const { data: tasks }: { data: Task[] } = await axios.get(
    `/api/getTasks/${id}`
  );

  return (
    <div>
      <span>Your Tasks:</span>
      {tasks.length ? (
        <>
          {tasks.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}
