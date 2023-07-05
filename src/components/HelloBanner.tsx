"use client";

import { useSession } from "@/state/useSession";

export function HelloBanner() {
  const { sessionUser } = useSession();

  return (
    <div>
      <span>Hello {sessionUser?.name}</span>
      <p>It is good to see you</p>
    </div>
  );
}
