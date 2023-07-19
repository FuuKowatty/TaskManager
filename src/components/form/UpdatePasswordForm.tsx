import { useEffect, useState } from "react";

import { useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useSession } from "@/hooks/state/useSession";

import { HashPasswordInput } from "../HashPasswordInput";
import { Button } from "../ui/button";

interface UpdatePasswordFormProps {
  password: string;
  id: number;
}

export function UpdatePasswordForm({
  password: readOnlyPasswordValue,
  id,
}: UpdatePasswordFormProps) {
  const { logout } = useSession();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [passwordValue, setPasswordValue] = useState(readOnlyPasswordValue);
  const { mutate: handleUpdateUser, isSuccess } = useUpdateUser(id);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateUser({ password: passwordValue });
    setIsReadOnly(true);
  };

  useEffect(() => {
    if (isSuccess) {
      logout();
      alert("Your password has been updated");
    }
  }, [isSuccess, logout]);

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <label>
        Password
        <HashPasswordInput
          value={isReadOnly ? readOnlyPasswordValue : passwordValue}
          handleChange={(event) => setPasswordValue(event.target.value)}
          readOnly={isReadOnly}
          styled={true}
        />
      </label>
      {!isReadOnly ? (
        <div>
          <button type="button" onClick={() => setIsReadOnly(true)}>
            cancel
          </button>
          <button>confirm</button>
        </div>
      ) : (
        <Button
          className="self-end rounded-sm bg-slate-950 text-white hover:bg-slate-900"
          type="submit"
          onClick={() => setIsReadOnly(false)}
        >
          Update
        </Button>
      )}
    </form>
  );
}
