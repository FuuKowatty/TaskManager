import { useAuth } from "@/hooks/api/useAuth";
import { Navbar } from "../../components/nav/Navbar";
import { createContext } from "react";

export const LoadingContext = createContext({
  isPending: false,
});

export function DashboardLayoutPage({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const {isPending} = useAuth();

    return (
      <div className="m-auto flex max-w-[1256px] items-stretch justify-stretch px-4 py-8 lg:h-screen">
        <LoadingContext.Provider value={{isPending: isPending}}>
          <Navbar />
          {children}
        </LoadingContext.Provider>
      </div>
    );
  }