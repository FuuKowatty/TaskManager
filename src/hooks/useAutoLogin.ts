import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useActiveUserId } from "@/state/useActiveStatsUser";
import { useSession } from "@/state/useSession";

export function useAutoLogin() {
  const router = useRouter();
  const { setSessionUser } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();

  const onSuccess = (data?: User) => {
    if (!data) {
      return;
    }
    setSessionUser(data);
    setActiveStatsUserId(data.id);
    router.push("/dashboard");
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

  return { userIdCookie };
}
