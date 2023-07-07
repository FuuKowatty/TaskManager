"use client";

import Image from "next/image";

import { useSession } from "@/state/useSession";

export function HelloBanner() {
  const { sessionUser } = useSession();

  if (!sessionUser) {
    return null;
  }

  const { name, surname } = sessionUser;

  return (
    <div className="flex w-full items-center justify-between rounded-md bg-gray-200 text-black lg:gap-x-4">
      <div className="p-4 py-6">
        <span className=" mb-2 block font-golos-text text-3xl font-bold ">
          Hello <br /> {name} {surname}!
        </span>
        <p className="text-lg">It is good to see you</p>
      </div>
      <div className="relative h-40 w-32 lg:h-40 lg:w-40">
        <Image
          src="https://i.imgur.com/tep9cOL.png"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>
    </div>
  );
}
