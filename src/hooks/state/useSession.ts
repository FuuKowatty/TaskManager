import { deleteCookie } from "cookies-next";
import { atom, useAtom } from "jotai";

import type { User } from "@/types/users";

const initialUserValue: User = {
  id: 0,
  name: "",
  surname: "",
  email: "",
  role: "",
  isLogged: false,
};

const sessionAtom = atom(initialUserValue);

export const useSession = () => {
  const [sessionUser, setSessionUser] = useAtom(sessionAtom);

  const logout = () => {
    setSessionUser(initialUserValue);
    deleteCookie("userId");
  };
  return { sessionUser, setSessionUser, logout };
};
