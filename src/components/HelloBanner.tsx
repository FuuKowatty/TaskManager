"use client";

import Image from "next/image";

import { useSession } from "@/hooks/state/useSession";

export function HelloBanner() {
  const {
    sessionUser: { name, surname },
  } = useSession();

  return (
    <section className="flex w-full items-center justify-between rounded-md bg-gray-200 text-black dark:bg-midnightBlue dark:text-white">
      <div className="p-4 py-6">
        <span className=" mb-2 text-3xl font-bold lg:block ">
          <span className="2xl:block">Hello </span>
          <span>
            {name} {surname}!
          </span>
        </span>
        <p className="text-lg">It is good to see you</p>
      </div>
      <div className="hidden h-full overflow-hidden rounded-md xl:block">
        <Image
          src="https://i.imgur.com/tep9cOL.png"
          alt="banner"
          className="object:cover"
          height={150}
          width={222}
        />
      </div>
    </section>
  );
}
