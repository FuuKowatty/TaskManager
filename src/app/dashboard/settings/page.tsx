"use client";

import { ButtonLogout } from "@/components/button/ButtonLogout";
import { UpdateForm } from "@/components/form/UpdateForm";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LoadingSettings } from "@/components/ui/LoadingSettings";

import { useSession } from "@/hooks/state/useSession";

export default function SettingsPage() {
  const {
    sessionUser: { email, id },
  } = useSession();

  if (!email) return <LoadingSettings />;

  return (
    <main className="flex w-full max-w-xl flex-col justify-start gap-12 lg:gap-20 lg:px-20">
      <h2 className="text-6xl font-black">Settings</h2>
      <section className="flex flex-col gap-10">
        <UpdateForm defaultValue={email} type="email" id={id} />
        <UpdateForm defaultValue="" type="password" id={id} />
      </section>
      <ThemeSwitcher />
      <section className="block lg:hidden">
        <ButtonLogout />
      </section>
    </main>
  );
}
