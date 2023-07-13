"use client";

import { BiLogOut } from "react-icons/bi";

export function LogoutButton() {
  const { sessionUser, logout } = useSession();
  if (!sessionUser.isLogged) return redirect("/login");

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-950/90 lg:static"
    >
      <BiLogOut /> Logout
    </button>
  );
}
