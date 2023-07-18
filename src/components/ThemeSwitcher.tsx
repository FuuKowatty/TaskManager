"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  isHidden?: boolean;
}

export function ThemeSwitcher({ isHidden }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isHidden) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <h2 className="mb-2 text-3xl font-black">Change Theme</h2>
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
