import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

import { useActiveUserId } from "@/state/useActiveStatsUser";
import { useSession } from "@/state/useSession";

export function useAuth() {
  const { setSessionUser, logout } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();

  const onSuccess = (data?: User) => {
    if (!data) {
      return;
    }
    setSessionUser({ ...data, isLogged: true });
    setActiveStatsUserId(data.id);
  };

  const userIdCookie = getCookie("userId");

  const { mutate: handleAutoLogin } = useMutation({
    mutationFn: async () => {
      if (!userIdCookie) {
        return;
      }

      const { data } = await axios.post<User>(
        `http://localhost:3000/api/login/${userIdCookie}`
      );
      return data;
    },
    onSuccess: onSuccess,
  });

  useEffect(() => {
    if (!userIdCookie) {
      return;
    }

    handleAutoLogin();
  }, [handleAutoLogin, userIdCookie]);

  return { userIdCookie, logout };
}