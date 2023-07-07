"use client";

import { DarkModeSwitcher } from "@/components/DarkModeSwitcher";
import { LogoutButton } from "@/components/LogoutButton";

interface Props {
  withLogoutButton: boolean;
}

export function MobileTopNavbar({ withLogoutButton }: Props) {
  return (
    <nav className="fixed left-0 right-0 top-2 z-10 mx-4 flex justify-between rounded-xl bg-slate-300 px-4 py-2 md:hidden">
      {withLogoutButton && <LogoutButton />}
      <DarkModeSwitcher />
    </nav>
  );
}
