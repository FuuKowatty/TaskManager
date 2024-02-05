import { useContext } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectUserInput";
import { ThemeContext } from "@/AppProvider";



export function ThemeSwitcher() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section>
      <h2 className="mb-2 text-3xl font-black">Change Theme</h2>
      <Select
        value={theme}
        onValueChange={toggleTheme}
        aria-labelledby="choose theme"
      >
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="dark:text-white">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}
