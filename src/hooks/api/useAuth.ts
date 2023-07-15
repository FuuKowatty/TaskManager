import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { apiClient } from "@/lib/apiClient";

import { useActiveUserId } from "@/state/useActiveStatsUser";
import { useSession } from "@/state/useSession";

export const useAuth = () => {
  const router = useRouter();
  const { sessionUser, setSessionUser } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();

  const userIdCookie = getCookie("userId");

  const authMutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiClient.get<Omit<User, "isLogged">>(
        `getUsers/${Number(userIdCookie)}`
      );

      return data;
    },
    onSuccess: (data) => {
      setSessionUser({ ...data, isLogged: true });
      setActiveStatsUserId(data.id);
    },
    onError: () => {
      router.push("/login");
    },
  });

  useEffect(() => {
    if (sessionUser.isLogged) return;

    const checkUser = async () => {
      const userIdCookie = getCookie("userId");
      if (!userIdCookie) {
        router.push("/login");
        return;
      }

      authMutation.mutate();
    };

    checkUser();
  }, [
    router,
    setSessionUser,
    setActiveStatsUserId,
    sessionUser.isLogged,
    authMutation,
  ]);
};
