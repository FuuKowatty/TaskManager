import { ButtonLogout } from "@/components/button/ButtonLogout";
import { UpdatePasswordForm } from "@/components/form/UpdatePasswordForm";
import { LoadingSettings } from "@/components/ui/LoadingSettings";
import { DashboardLayoutPage, LoadingContext } from "./DashboardLayout";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useContext } from "react";

export default function DashboardSettings() {
  const { isPending } = useContext(LoadingContext);

  if (isPending) return <LoadingSettings />;

  return (
    <DashboardLayoutPage>
    <main className="flex w-full max-w-xl flex-col justify-start gap-12 lg:gap-20 lg:px-20">
      <h2 className="text-6xl font-black">Settings</h2>
      <section className="flex flex-col gap-10">
        <UpdatePasswordForm />
      </section>
      <ThemeSwitcher />
      <section className="block lg:hidden">
        <ButtonLogout />
      </section>
    </main>
    </DashboardLayoutPage>
  );
}