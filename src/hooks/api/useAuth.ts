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
    sessionUser: { isLogged },
    setSessionUser,
  } = useSession();
  const { setStatsPermission } = useActiveUserId();

  const authMutation = useMutation({
    mutationKey: ["auth"],
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
      return;
    }

    const checkUser = async () => {
      const userIdCookie = getCookie("userId");
      if (!userIdCookie) {
        return router.push("/login");
      }
      authMutation.mutate(userIdCookie);
    };

    checkUser();
  }, [isLogged, router, authMutation]);
};
