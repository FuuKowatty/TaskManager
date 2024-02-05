import { useMutation } from "@tanstack/react-query";

import { useSession } from "@/hooks/state/useSession";
import type { User } from "@/types/users";

import { useActiveTaskFilter } from "../state/useActiveTaskFilter";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useActiveUserId } from "../state/useActiveStatsUser";
import { useEffect } from "react";
import { apiClient } from "@/lib/apiClient";

export const useAuth = () => {

    const token = Cookies.get('token');
    const { sessionUser, setSessionUser } = useSession();
    const { setStatsPermission: setChartFilter } = useActiveUserId();
    const { setStatsPermission: setTaskFilter } = useActiveTaskFilter();
    const router = useNavigate();
  
    const { mutate: fetchUser, isPending } = useMutation({
     mutationFn: async () => {
        const response = await apiClient().get<User>('/accounts/data', {
            headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
     },
      onSuccess: (user: User) => {
        setSessionUser(user);
        setChartFilter(user.role, user.id);
        setTaskFilter(user.role, user.id);
      },
      onError: (error) => {
        console.error('Error fetching user data:', error);
        Cookies.remove('token');
        router('/login');
      }
    });
  
    useEffect(() => {
      if (token) {
        if (!sessionUser.id) {
          fetchUser();
        }
      } else {
        router('/login');
      }
    }, [token, sessionUser.id, fetchUser, router]);

    return { isPending };
  };