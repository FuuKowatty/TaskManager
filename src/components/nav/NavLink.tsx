
import type { IconType } from "react-icons";
import { cn } from "../../lib/utils";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  text: string;
  icon: IconType;
}

export function NavLink({ href, text, icon: Icon }: NavLinkProps) {
  const pathname = useLocation().pathname;
  const isActive = pathname === href;

  const activeClass = isActive ? "text-primary-foreground dark:text-white" : "";

  return (
    <li className="flex w-full items-center justify-center">
      <Link
        to={href}
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
