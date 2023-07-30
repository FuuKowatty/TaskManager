import type { ReactNode } from "react";

import { Navbar } from "@/components/nav/Navbar";
import { TransitonAnimationHandler } from "@/components/TransitionAnimationHandler";

interface Props {
  children: ReactNode;
}

export default function DashboardLayoutPage({ children }: Props) {
  return (
    <div className="m-auto flex max-w-[1256px] items-stretch justify-stretch px-4 py-8 lg:h-screen">
      <Navbar />
      <TransitonAnimationHandler />
      {children}
    </div>
  );
}
