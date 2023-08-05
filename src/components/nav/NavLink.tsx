"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  text: string;
  icon: IconType;
}

export function NavLink({ href, text, icon: Icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeClass = isActive ? "text-primary-foreground dark:text-white" : "";

  return (
    <li className="flex w-full items-center justify-center">
      <Link
        href={href}
        className={cn(
          "flex w-full items-center justify-center rounded-lg text-muted transition-all hover:text-primary-foreground focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gray-50 dark:text-slate-400 hover:dark:text-white dark:focus:text-slate-400 lg:justify-start lg:gap-4 lg:p-3",
          activeClass
        )}
      >
        <Icon className="h-5 w-5 lg:h-7 lg:w-7" />
        <span className="visually-hidden lg:visually-visible">{text}</span>
      </Link>
    </li>
  );
}
