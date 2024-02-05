import { useNavdata } from "../../hooks/useNavData";
import { Logo } from "../Logo";
import { ButtonLogout } from "../button/ButtonLogout";
import { NavLink } from "./NavLink";
import { LoadingNavbar } from "../ui/LoadingNavbar";
import { useSession } from "@/hooks/state/useSession";
import { useContext } from "react";
import { LoadingContext } from "@/pages/dashboardPages/DashboardLayout";



export function Navbar() {
  const {
    sessionUser: { role },
  } = useSession();
  const { isPending } = useContext(LoadingContext);
  const navData = useNavdata(role);

  if (isPending) return <LoadingNavbar />;

  return (
    <header className="fixed bottom-2 left-2 right-2 z-10 mx-4 flex flex-shrink-0 gap-4 rounded-xl bg-slate-950 px-4 py-4 text-primary-foreground text-white dark:bg-midnightBlue lg:static lg:ml-0 lg:mr-2 lg:w-auto lg:flex-col lg:gap-0 lg:rounded-3xl lg:py-14 lg:pl-8 lg:pr-12 xl:mr-4 xl:w-64">
      <figure className="mb-12 ml-2 hidden rounded-lg p-2 lg:block">
        <Logo />
      </figure>
      <nav className="flex flex-1 gap-4 lg:flex-col lg:gap-14">
        {navData.map(({ icon, text, href }) => {
          return <NavLink key={text} href={href} icon={icon} text={text} />;
        })}
      </nav>
      <div className="hidden lg:block">
        <ButtonLogout />
      </div>
    </header>
  );
}
