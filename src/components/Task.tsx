"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export function Task({
  id,
  title,
  description,
  isCompleted,
  endDate,
}: Omit<Task, "startDate" | "userId">) {
  const router = useRouter();
  const handleTaskComplete = async () => {
    await axios.get(`/api/updateTask/${id}`);
    router.refresh();
  };

  const formattedDate = new Date(endDate);

  return (
    <div className="w-[350px] rounded-md bg-slate-950 p-4 text-white">
      <h1 className="font-golos-text text-lg font-bold">{title}</h1>
      <p className="text-md w-[80%] text-gray-300">{description}</p>
      <p>{formattedDate.toLocaleString("en-US")}</p>
      <div className="flex justify-end text-right" onClick={handleTaskComplete}>
        {isCompleted ? (
          <ImCheckboxChecked size={24} />
        ) : (
          <ImCheckboxUnchecked size={24} />
        )}
      </div>
    </div>
  );
}
