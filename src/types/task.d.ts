interface Task {
  id: number;
  title: string;
  description: string | null;
  isCompleted: boolean;
  startDate: string;
  endDate: string;
  userId: number;
}

interface FormAddTask {
  title: string;
  description: string | null;
  endDate: string;
  userId: number;
}

interface TaskCountPerMonth {
  monthName: string;
  taskCount: number;
}
