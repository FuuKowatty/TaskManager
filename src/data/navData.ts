import type { IconType } from "react-icons";
import { BiGroup } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiSquares2X2 } from "react-icons/hi2";

type NavData = { icon: IconType; text: string; href: string }[];

export const navData: NavData = [
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
