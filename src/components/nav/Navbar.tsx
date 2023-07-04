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
    <nav className="fixed bottom-2 left-0 right-0 mx-4 flex flex-shrink-0 gap-4 rounded-xl bg-slate-950  px-6 py-3 lg:static lg:my-7 lg:ml-7 lg:w-64 lg:flex-col lg:gap-0 lg:rounded-3xl lg:py-14 lg:pl-8 lg:pr-12">
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
      <DarkModeSwitcher />
    </nav>
  );
}
