import { navDataAdmin, navDataEmployee, navDataManager } from "@/data/navData";
import type { Role } from "@/types/users";

const roleToData = {
  employee: navDataEmployee,
  admin: navDataAdmin,
  manager: navDataManager,
};

export function useNavdata(role: Role | undefined) {
  return role ? roleToData[role] : [];
}
