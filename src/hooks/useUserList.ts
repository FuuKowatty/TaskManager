import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUserList() {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await axios.get<User[]>(`/api/getUsers`);
      return data;
    },
  });
}
