"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";

type Props = {
  href: string;
  text: string;
  icon: IconType;
};

export function NavLink({ href, text, icon: Icon }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeClass = isActive && "font-bold text-white";

  return (
    <li className="w-full">
      <Link
        href={href}
        className={clsx(
          "flex w-full items-center  gap-4 rounded-lg p-3 text-gray-400 transition-all hover:font-bold hover:text-white focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-50",
          activeClass
        )}
      >
        <Icon className="h-7 w-7" />
        {text}
      </Link>
    </li>
  );
}
