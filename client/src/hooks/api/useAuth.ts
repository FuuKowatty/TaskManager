import { useMutation } from "@tanstack/react-query";
import type { CookieValueTypes } from "cookies-next";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { apiClient } from "@/lib/apiClient";

import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";
import { useSession } from "@/hooks/state/useSession";
import type { User } from "@/types/users";

import { useActiveTaskFilter } from "../state/useActiveTaskFilter";

export const useAuth = () => {
  const router = useRouter();
  const {
    sessionUser: { isLogged },
    setSessionUser,
  } = useSession();
  const { setStatsPermission: setChartFilter } = useActiveUserId();
  const { setStatsPermission: setTaskFilter } = useActiveTaskFilter();

  const authMutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (userIdCookie: CookieValueTypes) => {
      const { data } = await apiClient.get<Omit<User, "isLogged">>(
        `users/${Number(userIdCookie)}`
      );

      return data;
    },
    onSuccess: (userData) => {
      setSessionUser({ ...userData, isLogged: true });
      setChartFilter(userData.role, userData.id);
      setTaskFilter(userData.role, userData.id);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);
};
