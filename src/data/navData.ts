import { ListChecks } from "lucide-react";
import type { IconType } from "react-icons";
import { BiGroup } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { HiSquares2X2 } from "react-icons/hi2";

export type NavLink = { icon: IconType; text: string; href: string };

const dashboard = {
  icon: HiSquares2X2,
  text: "Dashboard",
  href: "/dashboard",
} satisfies NavLink;

const tasks = {
  icon: ListChecks,
  text: "Tasks",
  href: "dashboard/tasks",
} satisfies NavLink;

const settings = {
  icon: FiSettings,
  text: "Settings",
  href: "dashboard/settings",
} satisfies NavLink;

const team = {
  icon: BiGroup,
  text: "Team",
  href: "/dashboard/team",
} satisfies NavLink;

export const navDataEmployee: NavLink[] = [dashboard, tasks, settings];
export const navDataManager: NavLink[] = [dashboard, tasks, settings];
export const navDataAdmin: NavLink[] = [dashboard, tasks, team, settings];
