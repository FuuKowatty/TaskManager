"use client";

import { BiLogOut } from "react-icons/bi";

import { useAuth } from "@/hooks/api/useAuth";
import { useSession } from "@/hooks/state/useSession";

export function ButtonLogout() {
  useAuth();
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
