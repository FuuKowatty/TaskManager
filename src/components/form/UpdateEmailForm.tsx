"use client";

import { useEffect, useState } from "react";

import { useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useSession } from "@/hooks/state/useSession";

import { Button } from "../ui/button";

interface UpdateEmailFormProps {
  email: string;
  id: number;
}

export function UpdateEmailForm({
  email: readOnlyEmailValue,
  id,
}: UpdateEmailFormProps) {
  const { logout } = useSession();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [emailValue, setEmailValue] = useState(readOnlyEmailValue);
  const { mutate: handleUpdateUser, isSuccess } = useUpdateUser(id);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateUser({ email: emailValue });
    setIsReadOnly(true);
  };

  useEffect(() => {
    if (isSuccess) {
      logout();
      alert("Your email has been updated");
    }
  }, [isSuccess, logout]);

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-1">
        Update Email
        <input
          name="email"
          type="email"
          placeholder="JohnCruise@gmail.com"
          className="min-w-[256px] rounded-sm p-2"
          readOnly={isReadOnly}
          value={isReadOnly ? readOnlyEmailValue : emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        />
      </label>
      {!isReadOnly ? (
        <div>
          <button
            type="button"
            onClick={() => {
              setEmailValue(readOnlyEmailValue);
              setIsReadOnly(true);
            }}
          >
            cancel
          </button>
          <button>confirm</button>
        </div>
      ) : (
        <Button
          className="self-end rounded-sm bg-slate-950 text-white hover:bg-slate-900"
          type="button"
          onClick={() => setIsReadOnly(false)}
        >
          Update
        </Button>
      )}
    </form>
  );
}
