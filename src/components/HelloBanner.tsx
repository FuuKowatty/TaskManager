"use client";

import Image from "next/image";

import { useSession } from "@/state/useSession";

export function HelloBanner() {
  const { sessionUser } = useSession();
  const { name, surname } = sessionUser;

  if (!sessionUser.isLogged) return null;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between rounded-md bg-gray-200 text-black">
        <div className="p-4 py-6">
          <span className=" mb-2 block text-3xl font-bold ">
            Hello <br /> {name} {surname}!
          </span>
          <p className="text-lg">It is good to see you</p>
        </div>
        <div className="relative h-40 w-80">
          <Image
            src="https://i.imgur.com/tep9cOL.png"
            alt="banner"
            className="object-cover"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
