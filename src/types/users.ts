export type Role = "employee" | "admin" | "manager" | "";

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: Role;
  isLogged: boolean;
}

export interface FormRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: Role;
}

export interface FormLogin {
  email: string;
  password: string;
}

export interface UsersWithCompletedTasks {
  id: number;
  name: string;
  surname: string;
  numberOfCompletedTasks: number;
}

export type UserCredentials = { email: string } | { password: string };
