"use client";

import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { useSession } from "@/state/useSession";

import { Task } from "../Task";

export function ListTasks({ userId }: { userId?: number }) {
  const { sessionUser } = useSession();

  const { data } = useQuery({
    queryKey: ["tasks", userId || sessionUser?.id],
    queryFn: async () => {
      const { data } = await apiClient.get<Task[]>(
        `getTasks/${userId || sessionUser?.id}`
      );

      return data;
    },
  });

  if (!data) {
    return null;
  }

  return (
    <div className="relative col-start-2 row-span-3 row-start-4 flex h-full w-full flex-col items-center">
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
