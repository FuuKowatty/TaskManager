import { useMutation } from "@tanstack/react-query";
import type { CookieValueTypes } from "cookies-next";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { apiClient } from "@/lib/apiClient";

import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";
import { useSession } from "@/hooks/state/useSession";

export const useAuth = () => {
  const router = useRouter();
  const {
    sessionUser: { isLogged, role, id },
    setSessionUser,
  } = useSession();
  const { setStatsPermission } = useActiveUserId();

  const authMutation = useMutation({
    mutationFn: async (userIdCookie: CookieValueTypes) => {
      const { data } = await apiClient.get<Omit<User, "isLogged">>(
        `getUsers/${Number(userIdCookie)}`
      );

      return data;
    },
    onSuccess: (userData) => {
      setSessionUser({ ...userData, isLogged: true });
      setStatsPermission(userData.role, userData.id);
    },
    onError: () => {
      deleteCookie("userId");
      router.push("/login");
    },
  });

  useEffect(() => {
    if (isLogged) {
      setStatsPermission(role, id);
      return;
    }

    const checkUser = async () => {
      const userIdCookie = getCookie("userId");
      if (!userIdCookie) {
        router.push("/login");
        return;
      }
      authMutation.mutate(userIdCookie);
    };

    checkUser();
  }, [
    router,
    setSessionUser,
    isLogged,
    role,
    id,
    authMutation,
    setStatsPermission,
  ]);
};
