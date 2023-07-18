import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const themeAtom = atomWithStorage("theme", "system");

export function useTheme() {
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

  return { theme, setTheme };
}
