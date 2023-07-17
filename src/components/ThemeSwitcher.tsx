"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useTheme } from "@/hooks/useTheme";

interface Props {
  isHidden?: boolean;
}

export function ThemeSwitcher({ isHidden }: Props) {
  const { theme, setTheme } = useTheme();

  if (isHidden) {
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
