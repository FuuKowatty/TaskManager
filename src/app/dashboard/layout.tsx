import type { ReactNode } from "react";

import { MobileTopNavbar } from "@/components/nav/MobileTopNavbar";
import { Navbar } from "@/components/nav/Navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="m-auto flex min-h-screen max-w-[1256px] items-stretch justify-stretch   border-2 bg-lightGray px-4 py-8">
      <Navbar />
      <MobileTopNavbar withLogoutButton />
      {children}
    </div>
  );
}
