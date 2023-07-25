"use client";

import Link from "next/link";

import { NavLink } from "@/components/nav/NavLink";

import { useSession } from "@/hooks/state/useSession";
import { useNavdata } from "@/hooks/useNavData";

import { ButtonLogout } from "../button/ButtonLogout";
import { LoadingNavbar } from "../ui/LoadingNavbar";

export function Navbar() {
  const {
    sessionUser: { role },
  } = useSession();
  const navData = useNavdata(role);

  if (!role) return <LoadingNavbar />;

  return (
    <nav className="fixed bottom-2 left-0 right-0 z-10 mx-4 flex flex-shrink-0 gap-4 rounded-xl bg-slate-950 px-4 py-4 text-primary-foreground text-white dark:bg-midnightBlue lg:static lg:ml-0 lg:mr-4 lg:w-64 lg:flex-col lg:gap-0 lg:rounded-3xl lg:py-14 lg:pl-8 lg:pr-12">
      <Link
        href="/"
        className="font-golos-text mb-24 ml-2 hidden rounded-lg p-2 text-5xl font-black focus:outline-none focus:ring-2 focus:ring-gray-200 lg:inline-block"
      >
        Logo
      </Link>
      <ul className="flex flex-1 gap-4 lg:flex-col lg:gap-14">
        {navData.map(({ icon, text, href }) => {
          return <NavLink key={text} href={href} icon={icon} text={text} />;
        })}
      </ul>
      <div className="hidden md:block">
        <ButtonLogout />
      </div>
    </nav>
  );
}
