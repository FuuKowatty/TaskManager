import { DashboardHeader } from "@/components/DashboardHeader";
import { ListTasks } from "@/components/ListTasks";

import { ChartArea } from "../ChartArea";

export function EmployeeView() {
  return (
    <>
      <DashboardHeader />
      <ChartArea />
      <ListTasks />
    </>
  );
}
