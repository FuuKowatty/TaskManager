import axios from "axios";
import { useRouter } from "next/navigation";

import { useActiveUserId } from "@/state/useActiveStatsUser";
import { useSession } from "@/state/useSession";

import { useAuth } from "./useAuth";

export const useLogin = () => {
  useAuth();
  const router = useRouter();
  const { sessionUser, setSessionUser } = useSession();
  const { setActiveStatsUserId } = useActiveUserId();

  if (sessionUser.isLogged) router.push("/dashboard");

  const handleLogin = async (formData: FormLogin) => {
    try {
      const { data: userData }: { data: Omit<User, "isLogged"> } =
        await axios.post("http://localhost:3000/api/login", formData);
      setSessionUser({ ...userData, isLogged: true });
      setActiveStatsUserId(userData.id);
    } finally {
      router.push("/dashboard");
    }
  };

  return {
    handleLogin,
  };
};
