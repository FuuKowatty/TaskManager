"use client";

import { ReduxProvider } from "@/redux/provider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
