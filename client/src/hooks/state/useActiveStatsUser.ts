import { atom, useAtom } from "jotai";

import type { Role } from "@/types/users";

type userId = number;

const activeStatsAtom = atom<userId>(0);

export const useActiveUserId = () => {
  const [activeStatsUserId, setActiveStatsUserId] = useAtom(activeStatsAtom);

  const setStatsPermission = (role: Role, id: number) => {
    // if admin is logged set false value so then it will print stats for all
    return role === "admin" || role === "manager"
      ? setActiveStatsUserId(0)
      : setActiveStatsUserId(id);
  };

  return { activeStatsUserId, setActiveStatsUserId, setStatsPermission };
};
