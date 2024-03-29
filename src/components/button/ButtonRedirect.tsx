import { Link } from 'react-router-dom';


export function RedirectButton({ children }: { children: React.ReactNode }) {
  return (
    <Link      
        aria-label={`redirect to ${children} page`}
        to={"/login"}
        className="w-[150px] rounded-md bg-blue-700 px-8 py-4 text-center font-bold text-white hover:bg-blue-800 dark:bg-red-500 dark:hover:bg-red-600"
    >
        {children}
    </Link>
  );
}