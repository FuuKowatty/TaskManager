"use client";

import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

import { useAutoLogin } from "@/hooks/api/useAutoLogin";
import { useSession } from "@/state/useSession";

export function ButtonLogout() {
  const router = useRouter();
  const { userIdCookie } = useAutoLogin();
  const { sessionUser, logout } = useSession();

  if (!sessionUser.isLogged && !userIdCookie) router.push("/login");

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-950/90 lg:static"
    >
      <BiLogOut /> Logout
    </button>
  );
}
