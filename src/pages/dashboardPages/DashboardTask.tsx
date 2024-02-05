import { useSession } from "@/hooks/state/useSession";
import { DashboardLayoutPage } from "./DashboardLayout";
import { Role } from "@/types/users";
import { DashboardEmployeeTask } from "./DashboardEmployeeTask";
import { DashboardAdminTask } from "./DashboardAdminTask";

export function DashboardTask() {
  const { sessionUser: {role} } = useSession();
  return (
    <DashboardLayoutPage>
      {role === Role.employee ? <DashboardEmployeeTask /> : <DashboardAdminTask />}
    </DashboardLayoutPage>
  );
}