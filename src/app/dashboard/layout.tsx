import type { ReactNode } from "react";

import { Navbar } from "@/components/nav/Navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen items-stretch justify-stretch bg-lightGray p-7">
      <Navbar />
      {children}
    </div>
  );
}
