"use client";

import { BiLogOut } from "react-icons/bi";

import { useSession } from "@/state/useSession";

export function ButtonLogout() {
  const { logout } = useSession();

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-950/90 lg:static"
    >
      <BiLogOut /> Logout
    </button>
  );
}
