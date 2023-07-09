import { BestEmployess } from "../BestEmployess";
import { AdminChartArea } from "../chart/AdminChartArea";

export async function AdminView() {
  return (
    <>
      <AdminChartArea />
      <BestEmployess />
    </>
  );
}
