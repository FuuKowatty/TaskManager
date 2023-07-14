import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useActiveUserId } from "@/state/useActiveStatsUser";
import { useSession } from "@/state/useSession";

export const useAuth = () => {
  const router = useRouter();
  const { sessionUser, setSessionUser } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();
  useEffect(() => {
    if (sessionUser.isLogged) return;

    const checkUser = async () => {
      const userIdCookie = getCookie("userId");
      if (userIdCookie) {
        try {
          const { data }: { data: Omit<User, "isLogged"> } = await axios.get(
            `http://localhost:3000/api/getUsers/${Number(userIdCookie)}`
          );
          setSessionUser({ ...data, isLogged: true });
          setActiveStatsUserId(data.id);
        } catch (error) {
          console.error("Error fetching user data:", error);
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    };

    checkUser();
  }, [router, setSessionUser, setActiveStatsUserId, sessionUser.isLogged]);
};
