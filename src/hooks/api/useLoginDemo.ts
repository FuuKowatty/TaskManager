import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { apiClient } from "@/lib/apiClient";

import { useSession } from "@/hooks/state/useSession";
import type { User } from "@/types/users";

export function useLoginDemo() {
  const { setSessionUser } = useSession();
  const router = useRouter();

  const { mutate: handleLoginDemo, ...mutation } = useMutation({
    mutationFn: async (): Promise<User> => {
      const { data } = await apiClient.get("login/demo");
      return data;
    },
    onSuccess: (data) => {
      setSessionUser({ ...data, isLogged: true });
      router.push("/dashboard");
    },
  });

  return { handleLoginDemo, ...mutation };
}
