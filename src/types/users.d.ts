type Role = "employee" | "admin" | "manager";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: Role;
}

interface FormRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}

interface FormLogin {
  email: string;
  password: string;
}

interface UserWithCompletedTasks {
  id: number;
  name: string;
  surname: string;
  numberOfCompletedTasks: number;
}
