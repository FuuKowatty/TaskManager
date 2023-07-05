import { useAppSelector } from "@/redux/hooks";

import type { NavData } from "@/data/navData";
import { navData, navDataAdmin, navDataManager } from "@/data/navData";

const roleToData: Record<Role, NavData> = {
  employee: navData,
  admin: navDataAdmin,
  manager: navDataManager,
};

export function useNavdata() {
  const selector = useAppSelector(({ usersReducer }) => usersReducer);
  return roleToData[selector.loggedUser?.role || "employee"];
}
