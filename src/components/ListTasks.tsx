"use client";

import { Task } from "./Task";

export function ListTasks({ userTasks }: { userTasks: Task[] }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
      <span className="mb-4 shrink-0 text-xl font-bold">Your Tasks:</span>
      {userTasks.length ? (
        <div className="flex w-full flex-col items-center overflow-y-auto">
          {userTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}
