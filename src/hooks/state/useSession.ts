import Cookies from "js-cookie";
import { atom, useAtom } from "jotai";

import type { User } from "@/types/users";
import { useNavigate } from "react-router-dom";

const initialUserValue: User = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  role: ""
};

const sessionAtom = atom(initialUserValue);

export const useSession = () => {
  const router = useNavigate();
  const [sessionUser, setSessionUser] = useAtom(sessionAtom);
  const logout = () => {
    setSessionUser(initialUserValue);
    Cookies.remove('token');
    router('/login');
  };
  return { sessionUser, setSessionUser, logout };
};