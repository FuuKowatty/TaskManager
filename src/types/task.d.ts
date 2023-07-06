interface Task {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  startDate: string;
  endDate: string;
  userId: number | undefined;
}

interface FormAddTask {
  title: string;
  description?: string;
  endDate: string;
  userId: number;
}
