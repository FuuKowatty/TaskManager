import type { ReactNode } from "react";

import { DashboardLayout } from "@/components/layouts/DashboardLayout";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
