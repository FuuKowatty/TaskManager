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
      className="flex items-center gap-2 rounded-md  bg-blue-700 px-4  py-2 text-white hover:bg-blue-800 dark:bg-red-500 dark:hover:bg-red-600 lg:static"
    >
      <BiLogOut /> Logout
    </button>
  );
}
