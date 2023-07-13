import type { ReactNode } from "react";

import { DashboardLayout } from "@/components/layouts/DashboardLayout";

interface Props {
  children: ReactNode;
}

export default function DashboardLayoutPage({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
