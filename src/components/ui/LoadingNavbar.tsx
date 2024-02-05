import { LoadingSpinner } from "./LoadingSpinner";


export function LoadingNavbar() {
  return (
    <nav className="fixed bottom-2 left-0 right-0 z-10 mx-4 flex flex-shrink-0 gap-4 rounded-xl bg-slate-950 px-4 py-4 text-primary-foreground text-white dark:bg-midnightBlue lg:static lg:ml-0 lg:mr-4 lg:w-64 lg:flex-col lg:gap-0 lg:rounded-3xl lg:py-14 lg:pl-8 lg:pr-12">
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    </nav>
  );
}
