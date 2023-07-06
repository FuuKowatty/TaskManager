"use client";

import Link from "next/link";

import { NavLink } from "@/components/nav/NavLink";
import { useNavdata } from "@/components/nav/useNavData";

import { LogoutButton } from "../LogoutButton";

export function Navbar() {
  const navData = useNavdata();

  return (
    <nav className="fixed  bottom-2 left-0 right-0 mr-4 flex flex-shrink-0 gap-4 rounded-xl bg-slate-950 px-6  py-3 text-white  lg:static lg:w-64 lg:flex-col lg:gap-0 lg:rounded-3xl lg:py-14 lg:pl-8 lg:pr-12">
      <Link
        href="/"
        className="mb-24 ml-2 hidden rounded-lg p-2 font-golos-text text-5xl font-black focus:outline-none focus:ring-2 focus:ring-gray-200 lg:inline-block"
      >
        Logo
      </Link>
      <ul className="flex flex-1 gap-4 lg:flex-col lg:gap-14">
        {navData.map(({ icon, text, href }) => {
          return <NavLink key={text} href={href} icon={icon} text={text} />;
        })}
      </ul>
      <LogoutButton />
    </nav>
  );
}
