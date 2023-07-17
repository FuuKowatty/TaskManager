interface Task {
  id: number;
  title: string;
  description: string | null;
  isCompleted: boolean;
  startDate: Date;
  endDate: Date;
  userId: number | undefined;
}

interface FormAddTask {
  title: string;
  description?: string;
  endDate: string;
  userId: number;
}
