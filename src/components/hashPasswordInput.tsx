"use client";

import { useState } from "react";
import {
  AiFillEyeInvisible as VisiblePassword,
  AiOutlineEye as InvisiblePassword,
} from "react-icons/ai";

export function HashPasswordInput({ value }: { value: string }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex items-center">
      <input
        className="w-[100px] appearance-none bg-transparent focus:outline-none"
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        readOnly
      />
      <button onClick={() => setIsPasswordVisible((prev) => !prev)}>
        {isPasswordVisible ? <VisiblePassword /> : <InvisiblePassword />}
      </button>
    </div>
  );
}
