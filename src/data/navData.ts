import type { IconType } from "react-icons";
import { BiGroup, BiPlus } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiSquares2X2 } from "react-icons/hi2";

export type NavData = { icon: IconType; text: string; href: string }[];

export const navDataEmployee: NavData = [
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
    icon: FiSettings,
    text: "Settings",
    href: "/settings",
  },
];

export const navDataManager: NavData = [
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
    icon: BiPlus,
    text: "Add task",
    href: "/add-task",
  },
  {
    icon: FiSettings,
    text: "Settings",
    href: "/settings",
  },
];

export const navDataAdmin: NavData = [
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
    icon: BiPlus,
    text: "Add user",
    href: "/add-user",
  },
  {
    icon: BiGroup,
    text: "Team",
    href: "dashboard/team",
  },
  {
    icon: FiSettings,
    text: "Settings",
    href: "/settings",
  },
];
