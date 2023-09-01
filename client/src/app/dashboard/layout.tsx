import { Navbar } from "@/components/nav/Navbar";
import { TransitonAnimationHandler } from "@/components/TransitionAnimationHandler";

export const metadata = {
  title: "TaskManager - Dashboard",
  description: "You can manage your tasks here",
};

export default function DashboardLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto flex max-w-[1256px] items-stretch justify-stretch px-4 py-8 lg:h-screen">
      <Navbar />
      <TransitonAnimationHandler />
      {children}
    </div>
  );
}
