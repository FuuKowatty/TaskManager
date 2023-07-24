import type { ReactNode } from "react";

import { Navbar } from "@/components/nav/Navbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayoutPage({ children }: Props) {
  return (
    <div className="m-auto flex h-screen max-w-[1256px] items-stretch justify-stretch px-4 py-8">
      <Navbar />
      {children}
    </div>
  );
}
