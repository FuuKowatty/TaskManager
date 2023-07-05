import type { NavData } from "@/data/navData";
import { navDataAdmin, navDataEmployee, navDataManager } from "@/data/navData";
import { useSession } from "@/state/useSession";

const roleToData = {
  employee: navDataEmployee,
  admin: navDataAdmin,
  manager: navDataManager,
} satisfies Record<Role, NavData>;

export function useNavdata() {
  const { sessionUser } = useSession();
  return roleToData[sessionUser?.role || "employee"];
}
