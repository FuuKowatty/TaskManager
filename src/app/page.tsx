"use client";

import Image from "next/image";

import { RedirectButton } from "@/components/button/ButtonRedirect";

import { useLoginDemo } from "@/hooks/api/useLoginDemo";

export const metadata = {
  title: "TaskManager - Homepage",
  description:
    "You can choose between login or if you dont have account just click view demo and login as admin",
};

export default function Home() {
  const { handleLoginDemo } = useLoginDemo();

  return (
    <main
      className={
        "flex h-screen w-screen flex-1 flex-col dark:bg-darkGray md:flex-row"
      }
    >
      <div className={"flex flex-col justify-center space-y-8 px-8 lg:w-7/12"}>
        <h1
          className={
            "flex flex-col text-left text-3xl font-bold xl:text-5xl 2xl:text-6xl"
          }
        >
          <span className="">Task Manager App</span>

          <span className="dark:text-white">for personal task management</span>
        </h1>

        <p className="text-left text-base text-gray-500 dark:text-gray-300 md:w-full lg:text-left lg:text-lg xl:text-xl">
          <span className="block">
            TaskManager is a powerful application designed for teams
          </span>
          <span>allowing admins to manage users,</span>
          <span className="block"> managers to assign tasks</span>
          <span>and employees to track their progress.</span>
        </p>

        <div
          className={
            "flex flex-col items-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0"
          }
        >
          <RedirectButton>Login</RedirectButton>
          <button
            onClick={() => handleLoginDemo()}
            className="w-[150px] rounded-md bg-blue-700 px-8 py-4 text-center font-bold text-white hover:bg-blue-800 dark:bg-gray-600 dark:hover:bg-gray-700"
            aria-label="View Demo"
          >
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
          alt={"the picture shows two guys and a computer"}
        />
      </div>
    </main>
  );
}
