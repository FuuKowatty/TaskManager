"use client";

import { ThemeProvider } from "next-themes";

import { QueryProvider } from "@/lib/query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
