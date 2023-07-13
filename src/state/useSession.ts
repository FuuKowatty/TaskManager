import { deleteCookie } from "cookies-next";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";

const initialUserValue: User = {
  id: 0,
  name: "",
  surname: "",
  email: "",
  password: "",
  role: "",
  isLogged: false,
};

const sessionAtom = atom(initialUserValue);

export const useSession = () => {
  const [sessionUser, setSessionUser] = useAtom(sessionAtom);
  const logout = useCallback(() => {
    setSessionUser(initialUserValue);
    deleteCookie("userId");
  }, [setSessionUser]);
  return { sessionUser, setSessionUser, logout };
};
