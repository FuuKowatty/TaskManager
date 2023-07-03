interface Task {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  userId: number | undefined;
}

interface FormAddTask {
  title: string;
  description?: string;
  userId: number;
}
