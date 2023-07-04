"use client";

import Link from "next/link";
import type { IconType } from "react-icons";
import { BiGroup } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiSquares2X2 } from "react-icons/hi2";

import { DarkModeSwitcher } from "@/components/DarkModeSwitcher";
import { NavLink } from "@/components/nav/NavLink";

type NavData = { icon: IconType; text: string; href: string }[];

const navData: NavData = [
  {
    icon: HiSquares2X2,
    text: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BsGraphUp,
    text: "Statistics",
    href: "/statistics",
  },
  {
    icon: BiGroup,
    text: "Team",
    href: "/team",
  },
  {
    icon: FiSettings,
    text: "Settings",
    href: "/settings",
  },
];

export function Navbar() {
  return (
    <nav className="my-7 ml-7 flex w-64 flex-shrink-0 flex-col rounded-3xl bg-slate-950 py-14 pl-8 pr-12">
      <Link
        href="/"
        className="mb-24 ml-2 inline-block rounded-lg p-2 font-golos-text text-5xl font-black focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        Logo
      </Link>
      <ul className="flex flex-col gap-14">
        {navData.map(({ icon, text, href }) => {
          return <NavLink key={text} href={href} icon={icon} text={text} />;
        })}
      </ul>

      <DarkModeSwitcher />
    </nav>
  );
}
