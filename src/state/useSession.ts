import { deleteCookie } from "cookies-next";
import { atom, useAtom } from "jotai";

const sessionAtom = atom<User | null>(null);

export const useSession = () => {
  const [sessionUser, setSessionUser] = useAtom(sessionAtom);
  const logout = () => {
    setSessionUser(null);
    deleteCookie("userId");
  };
  return { sessionUser, setSessionUser, logout };
};
