"use client";

import clsx from "clsx";
import { useState } from "react";
import {
  AiFillEyeInvisible as VisiblePassword,
  AiOutlineEye as InvisiblePassword,
} from "react-icons/ai";
interface HashPasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  styled?: "settings" | "createUser" | "";
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function HashPasswordInput({
  styled,
  handleChange,
  readOnly,
  ...rest
}: HashPasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isSettings = styled === "settings";
  const isCreateUser = styled === "createUser";

  const togglePasswordVisibility = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsPasswordVisible((prev) => !prev);
    event.stopPropagation();
  };

  const settingsPlaceholder = readOnly
    ? "Click button to edit"
    : "Enter new password";

  return (
    <div
      className={clsx("flex items-center", {
        "bg-white": isSettings,
        relative: isCreateUser,
      })}
    >
      <input
        className={clsx("w-[100px] appearance-none bg-transparent", {
          "min-w-[216px] p-2 dark:bg-midnightBlue": isSettings,
          "min-w-[216px w-full border-b-2 border-gray-600 p-1 text-black focus:border-blue-700 focus:outline-none dark:text-white dark:focus:border-red-500":
            isCreateUser,
        })}
        type={isPasswordVisible ? "text" : "password"}
        onChange={handleChange}
        name="password"
        placeholder={settingsPlaceholder}
        {...rest}
      />
      <button
        className={clsx("h-[40px] w-[40px]", {
          "dark:bg-midnightBlue": isSettings,
          "absolute right-0 top-0 h-full": isCreateUser,
        })}
        onClick={togglePasswordVisibility}
        type="button"
        aria-label="Toggle password visibility"
      >
        <span className="flex w-full items-center justify-center bg-white dark:bg-midnightBlue dark:text-white">
          {isPasswordVisible ? (
            <VisiblePassword className="pointer-events-none" />
          ) : (
            <InvisiblePassword className="pointer-events-none" />
          )}
        </span>
      </button>
    </div>
  );
}