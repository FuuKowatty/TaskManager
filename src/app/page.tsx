import Image from "next/image";

import { ButtonDemo } from "@/components/button/ButtonDemo";
import { RedirectButton } from "@/components/button/ButtonRedirect";

import cover from "../../public/cover.webp";

export default function Home() {
  return (
    <main className="flex h-screen flex-1 flex-col items-center gap-5 pb-10 dark:bg-darkGray md:flex-row lg:gap-0 lg:pb-0">
      <section className="flex flex-col space-y-8 px-8 lg:w-7/12">
        <h1 className="flex flex-col text-center text-3xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl">
          <span>Task Manager App</span>
          <span className="dark:text-white">for personal task management</span>
        </h1>
        <p className="font-heading flex flex-col space-y-1.5 text-center text-base text-gray-500 dark:text-gray-300 md:w-full lg:text-left lg:text-lg xl:text-xl">
          <span>TaskManager is a powerful app designed for teams</span>
          <span>allowing admins to manage users, managers to assign tasks</span>
          <span>and employees to track their progress.</span>
        </p>
        <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0">
          <RedirectButton>Login</RedirectButton>
          <ButtonDemo />
        </div>
      </section>
      <div className="relative -order-10 h-full w-full justify-end lg:order-last lg:flex lg:w-5/12">
        <Image
          fill
          className={"absolute right-0 top-0 object-cover"}
          src={cover}
          alt={`Customer Support image`}
          placeholder="blur"
        />
      </div>
    </main>
  );
}
