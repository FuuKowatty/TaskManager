import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useUpdateUser(formData: User) {
  const queryClient = useQueryClient();
  const handleUpdateUser = () => {
    axios
      .post(`/api/getUsers/${formData.id}`, formData)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        queryClient.invalidateQueries({ queryKey: ["team"] });
      });
  };

  return handleUpdateUser;
}
