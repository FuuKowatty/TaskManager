import { Role, type User } from "@/types/users";

export const filterByRole = (users: User[], role: Role) => {
    return users.filter(user =>  user.role === role);
}