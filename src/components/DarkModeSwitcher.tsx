"use client";

import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme();
  const handleChangeMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <span
      className="flex min-h-[44px] min-w-[44px] items-center"
      onClick={handleChangeMode}
    >
      <button className="relative ml-auto  flex h-[24px] w-[42px] cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-gray-200 bg-white p-2 text-sm dark:border-white/10 dark:bg-gray-800">
        <div className="text-gray-800 dark:text-white">
          <div className="text-gray-800 dark:text-white">
            <BsFillSunFill />
          </div>
        </div>
        <div className="text-gray-800 dark:text-white">
          <BsFillMoonFill />
        </div>
        <div className="absolute left-[2px] right-auto h-[18px] w-[18px] rounded-full border-[3px] border-blue-300 bg-blue-400 dark:left-auto  dark:right-[2px]" />
      </button>
    </span>
  );
}
