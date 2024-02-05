import { useContext } from "react";
import { BestEmployess } from "./BestEmployess";
import { ListTasks } from "./ListTasks";
import { useSession } from "@/hooks/state/useSession";
import { LoadingContext } from "@/pages/dashboardPages/DashboardLayout";
import { LoadingEmployeesContent } from "./ui/LoadingEmployeesContent";

export function RoleDependentContent() {

  const { sessionUser: { role } } = useSession();
  const { isPending } = useContext(LoadingContext);

  if(isPending) return <LoadingEmployeesContent />

  return (
    <section className="relative mt-[-100px] h-[500px] w-full flex-col items-center md:mt-0 lg:col-start-2 lg:row-span-3 lg:row-start-4 lg:h-full">
      {role === "employee" ? <ListTasks /> : <BestEmployess />}
    </section>
  );
}
