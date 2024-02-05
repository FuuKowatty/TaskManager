export enum TaskStatus {
  pending="PENDING",
  failed="FAILED",
  completed="COMPLETED",
}

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  startDate: string;
  endDate: string;
  assignedTo: number;
  completedAt: string | null;
}

export interface FormAddTask {
  title: string;
  description: string | null;
  endDate: string;
  assignedTo: number;
}
