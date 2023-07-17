"use client";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const themeAtom = atomWithStorage("theme", "system");

export function DarkModeSwitcher() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      return;
    }

    if (theme === "light") {
      document.body.classList.remove("dark");
      return;
    }

    if (theme === "system") {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDarkMode) {
        document.body.classList.add("dark");
        return;
      }

      document.body.classList.remove("dark");
      return;
    }
  }, [theme]);

  return (
    <div className="ml-auto max-w-sm">
      theme
      <Select value={theme} onValueChange={(val) => setTheme(val)}>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
