"use client";

import { useState } from "react";
import {
  ImCheckboxChecked as CheckedIcon,
  ImCheckboxUnchecked as UncheckedIcon,
} from "react-icons/im";

import { useUpdateTaskStatus } from "@/hooks/api/useUpdateTaskStatus";

export function Task({
  id,
  title,
  description,
  endDate,
}: Omit<Task, "startDate" | "userId" | "isCompleted">) {
  const { mutate: handleTaskComplete } = useUpdateTaskStatus(id);
  const [isChecked, setIsChecked] = useState(false);

  const formattedDate = new Date(endDate);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    handleTaskComplete();
  };

  return (
    <div className="mb-8 w-[320px] rounded-md bg-slate-950 p-4 text-white">
      <h1 className="font-golos-text text-lg font-bold">{title}</h1>
      <p className="text-md w-[80%] text-gray-300">{description}</p>
      <p>{formattedDate.toLocaleString("en-US")}</p>
      <div className="flex w-full justify-end">
        <button className="flex justify-end text-right" onClick={handleToggle}>
          {isChecked ? <CheckedIcon size={24} /> : <UncheckedIcon size={24} />}{" "}
        </button>
      </div>
    </div>
  );
}
