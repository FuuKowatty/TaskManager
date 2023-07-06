"use client";

import Image from "next/image";

import { useSession } from "@/state/useSession";

export function HelloBanner() {
  const { sessionUser } = useSession();
  const { name, surname } = sessionUser;

  return (
    <div className=" flex h-[180px] rounded-md bg-gray-200 text-black ">
      <div className="w-[60%] p-4 py-6">
        <span className=" mb-2 block font-golos-text text-3xl font-bold ">
          Hello <br /> {name} {surname}!
        </span>
        <p className="text-lg">It is good to see you</p>
      </div>
      <div className="relative h-[180px] w-[200px]">
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
