"use client";

import clsx from "clsx";
import { useState } from "react";
import {
  AiFillEyeInvisible as VisiblePassword,
  AiOutlineEye as InvisiblePassword,
} from "react-icons/ai";
interface HashPasswordInputProps {
  value: string;
  readOnly?: boolean;
  styled?: "settings" | "createUser" | "";
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function HashPasswordInput({
  value,
  readOnly,
  styled,
  handleChange,
}: HashPasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isSettings = styled === "settings";
  const isCreateUser = styled === "createUser";

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsPasswordVisible((prev) => !prev);
    event.stopPropagation();
  };

  return (
    <div
      className={clsx("flex items-center", {
        "bg-white": isSettings,
        relative: isCreateUser,
      })}
    >
      <input
        className={clsx(
          "w-[100px] appearance-none bg-transparent focus:outline-none",
          {
            "min-w-[216px] p-2": isSettings,
            "min-w-[216px w-full border-b-2 border-gray-400 p-1 text-black focus:border-blue-700 focus:outline-none":
              isCreateUser,
          }
        )}
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        onChange={handleChange}
        readOnly={readOnly ?? false}
        name="password"
        placeholder="Must have at least 6 characters"
      />
      <button
        className={clsx("h-[40px] w-[40px]", {
          "": isSettings,
          "absolute right-0 top-0 h-full": isCreateUser,
        })}
        onClick={(event) => handleClick(event)}
        type="button"
      >
        <span className="flex w-full items-center justify-center bg-white">
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