import type { ReactNode } from "react";

import { Navbar } from "@/components/nav/Navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="m-auto flex min-h-screen max-w-[1256px] items-stretch   justify-stretch border-2 bg-lightGray py-8">
      <Navbar />
      {children}
    </div>
  );
}
