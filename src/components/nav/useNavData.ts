import { navDataAdmin, navDataEmployee, navDataManager } from "@/data/navData";
import { useSession } from "@/state/useSession";

const roleToData = {
  employee: navDataEmployee,
  admin: navDataAdmin,
  manager: navDataManager,
};

export function useNavdata() {
  const { sessionUser } = useSession();
  return roleToData[sessionUser.role || "employee"];
}
