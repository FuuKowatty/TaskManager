"use client";

import { redirect } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

import { useSession } from "@/state/useSession";

export function LogoutButton() {
  const { sessionUser, logout } = useSession();
  if (!sessionUser) return redirect("/login");

  return (
    <button
      onClick={logout}
      className="fixed right-20 top-1 flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-950/90 lg:static"
    >
      <BiLogOut /> Logout
    </button>
  );
}
