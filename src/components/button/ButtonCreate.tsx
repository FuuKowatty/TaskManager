"use client";

import Link from "next/link";
import { BsPersonFillAdd } from "react-icons/bs";

interface Props {
  children: React.ReactNode;
  redirectTo: string;
}

export function ButtonCreate({ children, redirectTo }: Props) {
  return (
    <Link
      className="absolute right-0 top-0 flex w-[162px] items-center justify-center gap-1 rounded-md bg-blue-700 p-2 font-bold text-white hover:bg-blue-800 dark:bg-red-500 dark:hover:bg-red-600"
      href={redirectTo}
    >
      <BsPersonFillAdd color="white" />
      {children}
    </Link>
  );
}
