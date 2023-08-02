"use client";

import { useState } from "react";

import { UpdateConfirmation } from "@/components/form/UpdateConfirmation";
import { HashPasswordInput } from "@/components/HashPasswordInput";

import { useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useSession } from "@/hooks/state/useSession";

interface UpdateForm {
  defaultValue: string;
  id: number;
  type: "email" | "password";
}

export function UpdateForm({ defaultValue, id, type }: UpdateForm) {
  const { logout } = useSession();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [value, setValue] = useState(defaultValue);
  const { mutate: handleUpdateUser } = useUpdateUser(id);

  const updateValue =
    type === "password" ? { password: value } : { email: value };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateUser(updateValue, {
      onSuccess: () => {
        setIsReadOnly(true);
        logout();
      },
    });
  };

  return (
    <form
      className="flex max-w-[250px] flex-col gap-2 lg:max-w-[unset] lg:flex-row lg:items-end lg:gap-4"
      onSubmit={handleSubmit}
    >
      {type === "email" && (
        <label className="flex flex-col gap-1">
          Update Email
          <input
            name="email"
            type="email"
            placeholder="JohnCruise@gmail.com"
            className="min-w-[256px] rounded-sm p-2 dark:bg-midnightBlue"
            readOnly={isReadOnly}
            value={isReadOnly ? defaultValue : value}
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      )}

      {type === "password" && (
        <label>
          Password
          <HashPasswordInput
            value={isReadOnly ? defaultValue : value}
            handleChange={(event) => setValue(event.target.value)}
            readOnly={isReadOnly}
            styled="settings"
          />
        </label>
      )}
      <UpdateConfirmation
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      />
    </form>
  );
}
