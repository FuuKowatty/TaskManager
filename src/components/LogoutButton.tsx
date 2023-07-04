"use client";

import { redirect } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

import { logout } from "@/redux/featrues/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function LogoutButton() {
  const dispatch = useAppDispatch();
  const res = useAppSelector((state) => state.usersReducer);
  if (!res.loggedUser) return redirect("/login");

  return (
    <button
      onClick={() => dispatch(logout())}
      className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      <BiLogOut /> Logout
    </button>
  );
}
