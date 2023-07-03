"use client";

import { redirect } from "next/navigation";

import { useAppSelector } from "@/redux/hooks";

export default function Dashboard() {
  const res = useAppSelector((state) => state.usersReducer);
  if (!res.loggedUser) return redirect("/login");

  return <h1>Dashboard</h1>;
}
