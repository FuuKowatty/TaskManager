import { ButtonCreate } from "@/components/button/ButtonCreate";
import { ErrorMessage } from "@/components/form/ErrorMessage";
import { UsersTable } from "@/components/table/UserTable";
import { LoadingTable } from "@/components/ui/LoadingTable";
import { useUserList } from "@/hooks/api/useUserList";
import { DashboardLayoutPage } from "./DashboardLayout";
import { Role } from "@/types/users";
import { columns } from "@/components/table/UserColumns";
import { useAuth } from "@/hooks/api/useAuth";


export function DashboardTeam() {
  const { data, isLoading, error } = useUserList();
  useAuth();

  if (error || !data) return <ErrorMessage>Could not fetch users</ErrorMessage>;

  return (
    <DashboardLayoutPage>
      {isLoading ? <LoadingTable /> : (
        <main className="relative flex w-full flex-col items-start lg:pl-2 lg:pr-6">
          <h2 className="mb-8 text-5xl font-bold">Team</h2>
          <ButtonCreate redirectTo="create-user">Create User</ButtonCreate>
          <UsersTable
            columns={columns}
            data={data.filter((user) => user.role !== Role.admin)}
          />
        </main>
      )}
    </DashboardLayoutPage>
  );
}