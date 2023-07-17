"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";

interface NavLinkProps {
  href: string;
  text: string;
  icon: IconType;
}

export function NavLink({ href, text, icon: Icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeClass = isActive && "font-bold text-primary-foreground";

  return (
    <li className="flex w-full items-center justify-center">
      <Link
        href={href}
        className={clsx(
          "flex w-full items-center justify-center rounded-lg text-background transition-all hover:font-bold hover:text-primary-foreground focus:font-bold focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gray-50 lg:justify-start lg:gap-4 lg:p-3",
          activeClass
        )}
      >
        <Icon className="h-5 w-5 lg:h-7 lg:w-7" />
        <span className="visually-hidden lg:visually-visible">{text}</span>
      </Link>
    </li>
  );
}
