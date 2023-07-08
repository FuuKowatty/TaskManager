import { AdminChartArea } from "../chart/AdminChartArea";

export async function AdminView() {
  return (
    <>
      <AdminChartArea />
      <div className="w-full lg:col-start-2 lg:h-[120%]">
        Employees of the month
      </div>
    </>
  );
}
