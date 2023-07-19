"use client";

import { useId } from "react";

import { ButtonLogout } from "@/components/button/ButtonLogout";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const emailId = useId();
  const passwordId = useId();

  return (
    <main className="flex w-full max-w-xl flex-col justify-start gap-12 lg:gap-20 lg:px-20">
      <h2 className="text-6xl font-black">Settings</h2>
      <div className="flex flex-col gap-10">
        <form className="flex flex-col gap-5">
          <Label htmlFor={emailId}>Update Email</Label>
          <div className="flex gap-2">
            <Input type="email" id={emailId} placeholder="E-mail" />
            <Button type="submit">Update</Button>
          </div>
        </form>
        <form className="flex flex-col gap-5">
          <Label htmlFor={passwordId}>Update password</Label>
          <div className="flex gap-2">
            <Input type="password" id={passwordId} placeholder="Password" />
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
      <ThemeSwitcher />

      <div className="block lg:hidden">
        <ButtonLogout />
      </div>
    </main>
  );
}
