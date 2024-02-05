  export enum Role { 
    employee = "employee", 
    admin = "admin", 
    manager = "manager"
  };

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

export interface FormRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

export interface FormUpdate {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

export interface FormLogin {
  email: string;
  password: string;
}

export interface ResponseLogin {
  token: string;
  user: User
}

export interface UsersWithCompletedTasks {
  user: User,
  numberOfCompletedTasks: number;
}

export interface UpdatePassword {
  newPassword: string;
  newPasswordConfirmation: string;
  oldPassword: string;
}

export type UserCredentials = { email: string } | { password: string };
