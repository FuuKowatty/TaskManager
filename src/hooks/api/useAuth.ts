import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { apiClient } from "@/lib/apiClient";

import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";
import { useSession } from "@/hooks/state/useSession";

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

      // if admin is logged set false value so then it will print stats for all
      data.role === "admin" || data.role === "manager"
        ? setActiveStatsUserId(0)
        : setActiveStatsUserId(data.id);
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
      setSessionUser((prev) => ({ ...prev, isLogged: true }));
      authMutation.mutate();
    };

    checkUser();
  }, [router, setSessionUser, sessionUser.isLogged, authMutation]);
};
