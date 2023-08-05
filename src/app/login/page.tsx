import { LoginForm } from "@/components/form/LoginForm";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-lightGray dark:bg-midnightBlue lg:dark:bg-deepSlate">
      <main className="focus-within: m-auto w-full max-w-md rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-gray-300 dark:bg-midnightBlue dark:shadow-gray-600 lg:shadow-md">
        <h1 className="text-center text-3xl font-bold dark:text-white">
          Welcome
        </h1>
        <div className="my-4 flex w-full justify-center">
          <Logo />
        </div>
        <LoginForm />
      </main>
    </div>
  );
}
