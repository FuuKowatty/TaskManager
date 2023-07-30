"use client";

import { useEffect } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-darkGray/50 text-center">
      <div
        className={`dark:bg-darkBlue relative mx-4  flex min-h-[200px] w-full flex-col items-center rounded-md bg-white p-4 dark:bg-midnightBlue sm:w-[500px] sm:p-6  lg:w-[550px] lg:border-[1px] lg:border-lightGray dark:lg:border-gray-600`}
      >
        {children}
      </div>
    </div>
  );
}
