import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
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
      setStatsPermission(role, id);
    },
    onError: () => {
      router.push("/login");
    },
  });

  useEffect(() => {
    if (isLogged) return;

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
  }, [router, setSessionUser, isLogged, authMutation]);
};
