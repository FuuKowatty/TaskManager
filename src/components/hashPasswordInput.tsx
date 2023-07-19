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
  styled?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function HashPasswordInput({
  value,
  readOnly,
  styled,
  handleChange,
}: HashPasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsPasswordVisible((prev) => !prev);
    event.stopPropagation();
  };

  return (
    <div className={clsx("flex items-center", { "bg-white": styled })}>
      <input
        className={clsx(
          "w-[100px] appearance-none bg-transparent focus:outline-none",
          {
            "min-w-[216px] p-2": styled,
          }
        )}
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        onChange={handleChange}
        readOnly={readOnly ?? true}
        name="password"
      />
      <button
        className={clsx("", {
          "flex h-[40px] w-[40px] items-center justify-center": styled,
        })}
        onClick={(event) => handleClick(event)}
        type="button"
      >
        {isPasswordVisible ? (
          <VisiblePassword className="pointer-events-none" />
        ) : (
          <InvisiblePassword className="pointer-events-none" />
        )}
      </button>
    </div>
  );
}
