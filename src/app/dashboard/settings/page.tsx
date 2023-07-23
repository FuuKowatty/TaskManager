"use client";

import { ButtonLogout } from "@/components/button/ButtonLogout";
import { UpdateEmailForm } from "@/components/form/UpdateEmailForm";
import { UpdatePasswordForm } from "@/components/form/UpdatePasswordForm";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import { useSession } from "@/hooks/state/useSession";

export default function SettingsPage() {
  const {
    sessionUser: { email, password, id },
  } = useSession();

  if (!email || !password) return null;

  return (
    <main className="flex w-full max-w-xl flex-col justify-start gap-12 lg:gap-20 lg:px-20">
      <h2 className="text-6xl font-black">Settings</h2>
      <div className="flex flex-col gap-10">
        <UpdateEmailForm email={email} id={id} />
        <UpdatePasswordForm password={password} id={id} />
      </div>
      <ThemeSwitcher />
      <div className="block lg:hidden">
        <ButtonLogout />
      </div>
    </main>
  );
}