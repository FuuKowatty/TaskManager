"use client";

import { useSession } from "@/state/useSession";

export function HelloBanner() {
  const { sessionUser } = useSession();
  const { name, surname } = sessionUser;

  return (
    <div className=" flex h-[160px] w-[640px] rounded-md bg-gray-200 text-black">
      <div className="w-[50%] py-12 pl-8">
        <span className=" mb-2 block font-golos-text text-3xl font-bold ">
          Hello {name} {surname}!
        </span>
        <p className="text-lg">It is good to see you</p>
      </div>
      <div className="w-[50%]">
        <img
          src="https://i.imgur.com/tep9cOL.png"
          alt="banner"
          className="block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
