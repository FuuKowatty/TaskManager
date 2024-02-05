

// import { getErrorMessage } from "@/lib/getErrorMessage";

import { CreateTaskForm } from "@/components/form/CreateTaskForm";
import { DashboardLayoutPage } from "./DashboardLayout";

export default function DashboardCreateTask() {
  return (
    <DashboardLayoutPage>
    <div className="focus-within: m-auto w-full rounded-md bg-white px-4 pb-8 pt-24 text-black dark:bg-midnightBlue dark:text-white md:max-w-xl md:px-16 lg:m-0">
      <h1 className="text-center text-3xl font-bold">Create Task</h1>
      <CreateTaskForm />
    </div>
    </DashboardLayoutPage>
  );
}