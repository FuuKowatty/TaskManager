import type { ReactNode } from "react";

import { MobileTopNavbar } from "@/components/nav/MobileTopNavbar";
import { Navbar } from "@/components/nav/Navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="m-auto flex min-h-screen max-w-[1256px] items-stretch justify-stretch px-4 py-8 lg:px-0">
      <Navbar />
      <MobileTopNavbar withLogoutButton />
      {children}
    </div>
  );
}
