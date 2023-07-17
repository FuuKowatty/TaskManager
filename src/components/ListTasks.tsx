"use client";

import { useUserTasks } from "@/hooks/api/useUserTasks";
import { useSession } from "@/state/useSession";

import { Task } from "./Task";

interface Props {
  userId?: number;
}

export function ListTasks({ userId: propsUserId }: Props) {
  const { sessionUser } = useSession();
  const userId = propsUserId || sessionUser.id;

  const { data, isLoading } = useUserTasks(userId);

  if (!data) return <p>Could not Load data</p>;

  return (
    <div className="relative flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
        <span className="mb-4 shrink-0 text-xl font-bold">Your Tasks:</span>
        {data.length ? (
          <div className="flex w-full flex-col items-center overflow-y-auto">
            {data.map((task) => (
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
