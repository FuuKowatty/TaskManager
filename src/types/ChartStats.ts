type MonthNames =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type ChartStats = [
  {
    monthName: MonthNames;
    taskCount: number;
  },
  {
    monthName: MonthNames;
    taskCount: number;
  },
  {
    monthName: MonthNames;
    taskCount: number;
  },
  {
    monthName: MonthNames;
    taskCount: number;
  },
  {
    monthName: MonthNames;
    taskCount: number;
  },
  {
    monthName: MonthNames;
    taskCount: number;
  }
];
