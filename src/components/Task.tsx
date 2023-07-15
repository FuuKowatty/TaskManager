"use client";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

import { useUpdateTaskStatus } from "@/hooks/api/updateTaskStatus";

export function Task({
  id,
  title,
  description,
  isCompleted,
  endDate,
}: Omit<Task, "startDate" | "userId">) {
  const { mutate: handleTaskComplete } = useUpdateTaskStatus(id);

  const formattedDate = new Date(endDate);

  return (
    <div className="mb-8 w-[320px] rounded-md bg-slate-950 p-4 text-white">
      <h1 className="font-golos-text text-lg font-bold">{title}</h1>
      <p className="text-md w-[80%] text-gray-300">{description}</p>
      <p>{formattedDate.toLocaleString("en-US")}</p>
      <div
        className="flex justify-end text-right"
        onClick={() => handleTaskComplete()}
      >
        {isCompleted ? (
          <ImCheckboxChecked size={24} />
        ) : (
          <ImCheckboxUnchecked size={24} />
        )}
      </div>
    </div>
  );
}
