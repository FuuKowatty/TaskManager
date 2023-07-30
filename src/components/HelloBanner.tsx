"use client";

import Image from "next/image";

import { useSession } from "@/hooks/state/useSession";

export function HelloBanner() {
  const {
    sessionUser: { name, surname },
  } = useSession();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between rounded-md bg-gray-200 text-black dark:bg-midnightBlue dark:text-white">
        <div className="p-4 py-6">
          <span className=" mb-2 text-3xl font-bold lg:block ">
            <span className="2xl:block">Hello </span>
            <span>
              {name} {surname}!
            </span>
          </span>
          <p className="text-lg">It is good to see you</p>
        </div>
        <div className="relative hidden h-full w-64 xl:block">
          <div className="h-[150px] w-[220px] overflow-hidden rounded-md">
            <Image
              src="https://i.imgur.com/tep9cOL.png"
              alt="banner"
              className="object:cover"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
