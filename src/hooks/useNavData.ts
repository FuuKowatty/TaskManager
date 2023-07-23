import { navDataAdmin, navDataEmployee, navDataManager } from "@/data/navData";
import { useSession } from "@/hooks/state/useSession";

const roleToData = {
  employee: navDataEmployee,
  admin: navDataAdmin,
  manager: navDataManager,
};

export function useNavdata() {
  const { sessionUser } = useSession();

  return sessionUser.role ? roleToData[sessionUser.role] : [];
}