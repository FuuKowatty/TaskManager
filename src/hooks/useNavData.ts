import { navDataAdmin, navDataEmployee, navDataManager } from "@/data/navData";

const roleToData = {
  employee: navDataEmployee,
  admin: navDataAdmin,
  manager: navDataManager,
};

export function useNavdata(role: Role | undefined) {
  return role ? roleToData[role] : [];
}
