import { UserForm } from "@/components/form/UserForm";
import { DashboardLayoutPage } from "./DashboardLayout";

// import { getErrorMessage } from "@/lib/getErrorMessage";


export function DashboardCreateUser() {
  return (
    <DashboardLayoutPage>
        <div className="focus-within: m-auto w-full rounded-md bg-white px-4 pb-8 pt-24 text-black dark:bg-midnightBlue dark:text-white md:max-w-xl md:px-16 lg:m-0">
        <h1 className="text-center text-3xl font-bold">Create User</h1>
        <UserForm />
        </div>
    </DashboardLayoutPage>
  );
}