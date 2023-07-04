"use client";

import { useAppSelector } from "@/redux/hooks";

export function HelloBanner() {
  const name = useAppSelector((state) => state.usersReducer.loggedUser?.name);
  return (
    <>
      <span>Hello {name}</span>
      <p>It is good to see you</p>
    </>
  );
}
