import { atom, useAtom } from "jotai";

import type { Role } from "@/types/users";

const initialValue = 0;
const Atom = atom<number>(initialValue);

export const useActiveTaskFilter = () => {
  const [activeTaskFilter, setActiveTaskFilter] = useAtom(Atom);

  const setStatsPermission = (role: Role, id: number) => {
    // if admin is logged set false value so then it will print stats for all
    return role === "admin" || role === "manager"
      ? setActiveTaskFilter(0)
      : setActiveTaskFilter(id);
  };

  return { activeTaskFilter, setActiveTaskFilter, setStatsPermission };
};
