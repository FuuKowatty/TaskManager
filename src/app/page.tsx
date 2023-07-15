import Image from "next/image";

import { RedirectButton } from "@/components/button/ButtonRedirect";

export default function Home() {
  return (
    <main className={"flex h-screen flex-1 flex-col bg-gray-200 md:flex-row"}>
      <div className={"flex w-full flex-1 flex-col justify-center space-y-12"}>
        <div className={"flex flex-1 items-center"}>
          <div className={"flex flex-col space-y-8 px-8 lg:w-7/12"}>
            <div className={"flex justify-center lg:justify-start"}></div>

            <h1
              className={
                "flex flex-col text-center  text-3xl font-bold lg:text-left xl:text-5xl 2xl:text-6xl"
              }
            >
              <span className="">Task Manager App</span>

              <span
                className={
                  "bg-gradient-to-br bg-clip-text text-black" +
                  " from-primary-500 to-primary-400" +
                  " to-primary-400 leading-[1.2]"
                }
              >
                for personal task management
              </span>
            </h1>

            <div
              className={
                "text-base text-gray-500 dark:text-gray-400 lg:text-lg xl:text-xl" +
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
              <button className="rounded-md bg-blue-700 px-8 py-4 text-center font-bold text-white lg:min-w-[162px]">
                View Demo
              </button>
            </div>
          </div>

          <div className={"relative hidden h-full w-5/12 justify-end lg:flex"}>
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
