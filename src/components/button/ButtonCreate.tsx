"use client";

import { useRouter } from "next/navigation";
import { BsPersonFillAdd } from "react-icons/bs";

interface Props {
  redirectTo: string;
  text: string;
}

export function ButtonCreate({ redirectTo, text }: Props) {
  const router = useRouter();

  return (
    <button
      className="absolute right-0 top-0 flex w-[162px] items-center justify-center gap-1 rounded-md bg-blue-700 p-2 font-bold text-white hover:bg-blue-800"
      onClick={() => router.push(redirectTo)}
    >
      <BsPersonFillAdd color="white" />
      {text}
    </button>
  );
}
