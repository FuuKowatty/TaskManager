import Image from "next/image";

import { RedirectButton } from "@/components/button/ButtonRedirect";

export default function Home() {
  return (
    <main
      className={"flex h-screen flex-1 flex-col dark:bg-darkGray md:flex-row"}
    >
      <div className={"flex w-full flex-1 flex-col justify-center space-y-12"}>
        <div
          className={
            "flex flex-1 flex-col items-center gap-5 pb-10 lg:flex-row lg:gap-0 lg:pb-0"
          }
        >
          <div className={"flex flex-col space-y-8 px-8 lg:w-7/12"}>
            <div className={"flex justify-center lg:justify-start"}></div>
            <h1
              className={
                "flex flex-col text-center  text-3xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl"
              }
            >
              <span className="">Task Manager App</span>

              <span className="dark:text-white">
                for personal task management
              </span>
            </h1>

            <div
              className={
                "text-center text-base text-gray-500 dark:text-gray-300 lg:text-left lg:text-lg xl:text-xl " +
                " font-heading flex flex-col space-y-1.5 md:w-full"
              }
            >
              <span>TaskManager is a powerful app designed for teams</span>

              <span>
                allowing admins to manage users, managers to assign tasks
              </span>

              <span>and employees to track their progress.</span>
            </div>

            <div
              className={
                "flex flex-col items-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0"
              }
            >
              <RedirectButton>Login</RedirectButton>
              <button className="rounded-md bg-blue-700 px-8 py-4 text-center  font-bold text-white hover:bg-blue-800 dark:bg-red-500 dark:hover:bg-red-600 lg:min-w-[162px]">
                View Demo
              </button>
            </div>
          </div>

          <div
            className={
              "relative -order-10 h-full w-full justify-end lg:order-last lg:flex lg:w-5/12"
            }
          >
            <Image
              fill
              className={"absolute right-0 top-0 object-cover"}
              src={"https://i.imgur.com/MEmZlmW.jpg"}
              alt={`Customer Support image`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
